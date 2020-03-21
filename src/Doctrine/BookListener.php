<?php
namespace App\Doctrine;
use App\Entity\Book;
use Symfony\Component\Security\Core\Security;


class BookListener
{

    private $security;

    public function __construct(Security $security){
        $this->security = $security;
    }

    public function prePersist(Book $book)
    {
        $book->setAddedBy($this->security->getUser());

        
    }
}