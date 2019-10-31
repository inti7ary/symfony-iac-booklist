<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Book;

class IndexController extends AbstractController{

    /**
     * @Route("/", name="index")
     */
    public function index(){
        $repository = $this->getDoctrine()->getRepository(Book::Class);
        $books = $repository->findBy(array("premoderation" => 0), array("id" => "DESC"), 10);
        return $this->render('index.html.twig', ["books" => $books]);
    }
}