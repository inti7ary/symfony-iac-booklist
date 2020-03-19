<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Author;
use App\Service\CategoryTranslator;
use App\Service\PaginationHelper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authorization\AuthorizationChecker;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
class AuthorController extends AbstractController{


    /**
     * @Route("/authors", name="authors")
     */
    public function authors(Request $request){
        $page = $request->get('page') ?? 1;


        $status = $request->query->get('status');
        $name = $request->query->get('name');

        if($status === 'new_author_success' && $name){
            $this->addFlash('publish_note', 'Автор "'.$name.'" успешно добавлен!');
        }else if($status === 'author_deleted_success' && $name){
            $this->addFlash('deletion_note', 'Автор "'.$name.'" удалён');
        }

        return $this->render('authors.html.twig', ['page' => $page]);
    }

    /**
     * @Route("/authors/{id<\d+>}", name="author")
     */
    public function showAuthor($id){

        return $this->render("author.html.twig", ["author_id" => $id]);

    }

    /**
     * @Route("/authors/new", name="new_author")
     */
    public function newAuthor(){
        
        return $this->render('new_author.html.twig');
    }


    /**
     * @Route("/authors/img", methods={"POST"}, name="authors_img")
     */
    public function postBookImg(Request $request){
        
        $file = $request->files->get('img');

        $new_file_name = uniqid('author_').substr(md5(random_bytes(10)), 0, 25).'.'.$file->guessExtension();

        $file_path = '/img/authors/author-default.jpg';

        try{
            $file->move(
            $this->getParameter('authors_img_directory'),
            $new_file_name);
            

            $file_path ='/img/authors/'.$new_file_name;
        }catch(FileException $e){
          
       
        }
       

        $response = new JsonResponse();

        $response->setData(['img' => $file_path]);

        return $response;
    }

}