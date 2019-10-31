<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    public function countBooksToShow($category){
        return $this->createQueryBuilder('b')
            ->select("COUNT(b.id)")
            ->andWhere('b.premoderation = 0')
            ->andWhere('b.genre = :category')
            ->setParameter('category', $category)
            ->getQuery()
            ->getSingleScalarResult();

    }

    public function findByKeyword($keyword) : array{
        $entityManager = $this->getEntityManager();
        
        $pattern = '%'.$keyword.'%';

        $query = $entityManager->createQuery("
        SELECT b FROM App\Entity\Book b WHERE b.premoderation = 0 AND (b.title LIKE :pattern OR b.author LIKE :pattern)
        ")->setParameter('pattern', $pattern);
        return $query->getResult();


    }
    // /**
    //  * @return Book[] Returns an array of Book objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Book
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
