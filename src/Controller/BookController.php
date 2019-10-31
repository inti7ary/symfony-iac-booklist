<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Book;
use App\Service\CategoryTranslator;
use App\Service\PaginationHelper;
use App\Form\BookFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authorization\AuthorizationChecker;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class BookController extends AbstractController{

/**
 * @Route("/book")
 */
public function book_redirect(){

   return $this->redirectToRoute("index");

}
/**
 * @Route("/books")
 */
public function books_redirect(){

    return $this->redirectToRoute("index");
 
 }
/**
 * @Route("/category")
 */
public function category_redirect(){

    return $this->redirectToRoute("index");
 
 }

/**
 * @Route("/book/{id<id\d+>}", name="book")
 */
public function book($id){

    $id = substr($id, 2);
    $repository = $this->getDoctrine()->getRepository(Book::class);
    $book = $repository->find($id);
    if($book->getPremoderation() == 1) $this->denyAccessUnlessGranted("ROLE_MODERATOR", $book);
    return $this->render("book.html.twig", ["book" => $book]);

}
/**
 * @Route("/category/{category}/{page}", name="category")
 */
public function category($category, $page = 1, CategoryTranslator $categoryTranslator, PaginationHelper $paginationHelper){
    $categoryParam = $category;
    $category = $categoryTranslator->translate($categoryParam);
    $repository = $this->getDoctrine()->getRepository(Book::class);
    $offset = 10 * (intval($page) - 1);
    $books = $repository->findBy(array("premoderation" => 0, "genre" => $category), array("id" => 'DESC'), 10, $offset);
    $books_num = $repository->countBooksToShow($category);
    $pagination = $paginationHelper->getPagination($books_num, $page, 10);
    if($pagination['pages_total'] < $page) return $this->redirectToRoute("category", ['category' => $categoryParam, 'page' => $pagination['pages_total']]);
    $currentState = ["category" => $categoryParam, "books_num" => $books_num, "translatedCategory" =>$category];
    return $this->render("category.html.twig", ["books" => $books, "pagination" => $pagination, "currentState" => $currentState]);

}

/**
 * @Route("/book/add", name="addbook")
 */
public function addBook(Request $request, TokenStorageInterface $tokenStorage,
 AuthenticationManagerInterface $authenticationManager,
  AccessDecisionManagerInterface $accessDecisionManager,
  FileUploader $fileUploader) : Response{

    $book = new Book();
    $form = $this->createForm(BookFormType::class, $book);
    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()){
        $authChecker = new AuthorizationChecker($tokenStorage,
        $authenticationManager,
        $accessDecisionManager);

        $book->setTitle($form->get("title")->getData());
        $book->setAuthor($form->get("author")->getData());
        $book->setGenre($form->get("genre")->getData());
        $book->setDescription($form->get("description")->getData());
        $book->setAddedBy($this->getUser()->getUsername());
        
        if(($img = $form->get("imgUrl")->getData()) !== null){
            $imgUrl = $fileUploader->upload($img);
            $book->setImgUrl($imgUrl);
        }
        else $book->setImgUrl("img/book-default.jpg");

        $premoderation = ($authChecker->isGranted("ROLE_MODERATOR")) ? 0 : 1;
        $book->setPremoderation($premoderation);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($book);
        $entityManager->flush();

        if(!$premoderation) $this->addFlash("add_note", "Книга '".$book->getTitle()."' добавлена");
        else $this->addFlash("add_mod_note", "Книга '".$book->getTitle()."' отправлена на модерацию");
        return $this->redirectToRoute("index");
    }
   
    return $this->render("addbook.html.twig", ["form" => $form->createView()]);
}


/**
 * @Route("/books/moderation", name="books_moderation")
 * @IsGranted("ROLE_MODERATOR")
 */
 public function book_moderation(){

    $repository = $this->getDoctrine()->getRepository(Book::class);
    $books = $repository->findBy(array("premoderation" => 1), array("id" => "DESC"));

    return $this->render("book_moderation.html.twig", ['books' => $books]);
 }


 /**
 * @Route("/books/search", name="books_search")
 */
public function book_search(Request $request){

    if($request->isXmlHttpRequest()){
        $keyword = $request->get("keyword");
        
        //$books = $this->getDoctrine()->getRepository(Book::class)->findBy(array("premoderation" => 0));
        $books = $this->getDoctrine()->getRepository(Book::class)->findByKeyword($keyword);
        $reponse = array();

        foreach($books as $book){
            $reponse[] = array("title" => $book->getTitle(),
            "author" => $book->getAuthor(),
            "imgUrl" => $book->getImgUrl(),
            "description" => $book->getDescription(),
            "url" => $this->generateUrl("book", ["id" => "id".$book->getId()])
        );
        }
        return new JsonResponse($reponse);
        
    }else return $this->redirectToRoute("index");

 }

}


