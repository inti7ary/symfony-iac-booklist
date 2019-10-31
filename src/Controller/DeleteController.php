<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Entity\Book;

class DeleteController extends AbstractController{

    /**
     * @Route("book/delete/{id}", name="delete_book", methods={"POST"})
     * @IsGranted("ROLE_MODERATOR")
     */
    public function delete_book($id){
        $repository = $this->getDoctrine()->getRepository(Book::class);
        $book = $repository->find($id);

        $entityManager = $this->getDoctrine()->getManager();
        
        $entityManager->remove($book);
        $entityManager->flush();

        $this->addFlash('delete_note', "Книга '".$book->getTitle()."' была удалена");

        return $this->redirectToRoute("index");

    }

    /**
     * @Route("/book/publish/{id}", name="publish_book", methods={"POST"})
     * @IsGranted("ROLE_MODERATOR")
     */
    public function publish_book($id){
        $entityManager = $this->getDoctrine()->getManager();
        $book = $entityManager->getRepository(Book::class)->find($id);
        $book->setPremoderation(0);
        $entityManager->flush();
        
        
        $this->addFlash('publish_note', "Книга опубликована!");
        return $this->redirectToRoute("book", ["id" => "id".$book->getId()]);
    }
}