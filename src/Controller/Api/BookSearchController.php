<?php


namespace App\Controller\Api;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use App\Entity\Book;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Collections\ArrayCollection;


class BookSearchController  extends AbstractController
{
    // private $bookPublishingHandler;

    // public function __construct( )
    // {
    //     $this->bookPublishingHandler = $bookPublishingHandler;
    // }

    public function __invoke(Request $request): ArrayCollection
    {
        $query = $request->get("query");
            
        //$books = $this->getDoctrine()->getRepository(Book::class)->findBy(array("premoderation" => 0));
        $repo = $this->getDoctrine()->getRepository(Book::class);
      
        $books = $repo->findBySearchQuery($query);

        return new ArrayCollection($books);
    }
}