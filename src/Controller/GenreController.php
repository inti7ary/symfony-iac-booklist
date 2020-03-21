<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Genre;
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

class GenreController extends AbstractController{



    /**
     * @Route("/genres", name="genres")
     */
    public function genres(Request $request){
        $page = $request->get('page') ?? 1;

        $status = $request->query->get('status');
        $name = $request->query->get('name');

        if($status === 'new_genre_success' && $name){
            $this->addFlash('publish_note', 'Жанр "'.$name.'" успешно добавлен!');
        }
        
        
        return $this->render('genres.html.twig', ['page' => $page]);
    }


    /**
     * @Route("/genres/{id<\d+>}", name="genre")
     */
    public function showGenre($id){

        return $this->render("genre.html.twig", ["genre_id" => $id]);

    }

    /**
     * @Route("/genres/new", name="new_genre")
     */
    public function newGenre(){
        return $this->render('new_genre.html.twig');
    }


}