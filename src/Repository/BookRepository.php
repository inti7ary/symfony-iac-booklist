<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
//use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Psr\Log\LoggerInterface;
/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    private $logger;
    public function __construct( LoggerInterface $logger, ManagerRegistry $registry)
    {
        $this->logger = $logger;
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

    // public function findByKeyword($keyword) : array{
    //     $entityManager = $this->getEntityManager();
        
    //     $pattern = '%'.$keyword.'%';

    //     $query = $entityManager->createQuery("
    //     SELECT b FROM App\Entity\Book b WHERE b.premoderation = 0 AND (b.title LIKE :pattern OR b.author LIKE :pattern)
    //     ")->setParameter('pattern', $pattern);
    //     return $query->getResult();


    // }

     /**
      * @return Book[] Returns an array of Book objects
      */
    public function findBySearchQuery($searchQuery)
    {
        $entityManager = $this->getEntityManager();
        $rsm = new ResultSetMappingBuilder($entityManager);
        $rsm->addRootEntityFromClassMetadata('App\Entity\Book', 'b');

        $nativeQuery = $entityManager->createNativeQuery(
            "SELECT *, ts_rank_cd((setweight(to_tsvector('russian', title), 'A') || setweight(to_tsvector('russian',description), 'D')),query) AS rank 
            FROM book, plainto_tsquery('russian', ?) query
            WHERE ts_rank_cd((setweight(to_tsvector('russian', title), 'A') || setweight(to_tsvector('russian',description), 'D')),query) > 0 ORDER BY rank DESC",
            $rsm
        );
        

        $nativeQuery->setParameter(1, $searchQuery);
        
  

        $books = $nativeQuery->getResult();


        return $books;

    }


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
