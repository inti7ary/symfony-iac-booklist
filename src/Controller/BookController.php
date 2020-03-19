<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Book;
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
use Symfony\Component\Serializer\SerializerInterface;
use App\Repository\BookRepository;
use Doctrine\ORM\Query;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class BookController extends AbstractController{

    /**
     * @Route("/books", name="books")
     */
    public function books(Request $request){
        $page = $request->get('page') ?? 1;

        $status = $request->query->get('status');
        $title = $request->query->get('title');
        //$query = $request->query->get('query');

        if($status === 'new_book_success' && $title){
            $this->addFlash('publish_note', 'Книга "'.$title.'" успешно добавлена!');
        }else if($status === 'book_deleted_success' && $title){
            $this->addFlash('deletion_note', 'Книга "'.$title.'" удалена');
        }


        
        return $this->render('books.html.twig', ['page' => $page]);
    }

    /**
     * 
     * @Route("/books/search", name="books_search")
     */
    public function booksSearch(Request $request){
        $page = $request->get('page') ?? 1;
        $query = $request->query->get('query');
        $args = ['page' => $page];
        if($query && strlen($query)){
            $args['query'] = $query;
        }

        return $this->render('books.html.twig', $args);
    }

    /**
     * @Route("/book")
     */
    public function book_redirect(){

    return $this->redirectToRoute("home");

    }


    /**
     * @Route("/books/{id<\d+>}", name="book")
     */
    public function showBook($id){

        return $this->render("book.html.twig", ["book_id" => $id]);

    }


    /**
     * @Route("/books/new", name="new_book")
     */
    public function newBook() {

        return $this->render('new_book.html.twig');
        
    }


    /**
     * @Route("/books/img", methods={"POST"}, name="books_img")
     */
    public function postBookImg(Request $request, LoggerInterface $logger){
        
        $file = $request->files->get('img');

        $new_file_name = uniqid('book_').substr(md5(random_bytes(10)), 0, 25).'.'.$file->guessExtension();


        $file_path = '/img/books/book-default.jpg';

        try{
            $file->move(
            $this->getParameter('books_img_directory'),
            $new_file_name);
            

            $file_path ='/img/books/'.$new_file_name;
        }catch(FileException $e){
          
            $logger->debug('File exception:'.$e);
        }
       

        $response = new JsonResponse();

        $response->setData(['img' => $file_path]);

        return $response;
    }

    // /**
    //  * @Route("/books/moderation", name="books_moderation")
    //  * @IsGranted("ROLE_MODERATOR")
    //  */
    // public function book_moderation(){

    //     $repository = $this->getDoctrine()->getRepository(Book::class);
    //     $books = $repository->findBy(array("premoderation" => 1), array("id" => "DESC"));

    //     return $this->render("book_moderation.html.twig", ['books' => $books]);
    // }


    

}


