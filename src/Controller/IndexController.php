<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Book;

class IndexController extends AbstractController{

    /**
     * @Route("/", name="home")
     */
    public function index(){
        return $this->render('index.html.twig');
    }

    

    

    
    
}