<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Genre;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use App\Controller\Api\BookSearchController;
/**
 * Book
 * @ORM\EntityListeners({"App\Doctrine\BookListener"})
 * @ApiResource(
 * 
 * collectionOperations={
 * "get",
 * "post"={"security"="is_granted('ROLE_MODERATOR')"},
 * "book_search"={
 *         "method"="GET",
 *         "path"="/books/search",
 *         "controller"=BookSearchController::class,
 *     }
 * },
 * itemOperations={
 * "get", 
 * "delete"={"security"="is_granted('ROLE_MODERATOR')"},
 * "put"={"security"="is_granted('ROLE_MODERATOR')"},
 * "patch"={"security"="is_granted('ROLE_MODERATOR')"}
 * },
 * normalizationContext={"groups"={"book:read"}},
 * denormalizationContext={"groups"={"book:write"}},
 * attributes={"pagination_items_per_page":10, "order":{"createdAt" :"DESC"}}
 * )
 * 
 * @ORM\Table(name="book", indexes={@ORM\Index(name="IDX_CBE5A331699B6BAF", columns={"added_by"})})
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 * 
 */
class Book
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="books_id_seq", allocationSize=1, initialValue=1)
     * @Groups({"book:read", "genre:read", "author:read"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     * @Groups({"book:read", "book:write", "genre:read", "author:read"})
     * @Assert\NotBlank()
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(name="description", type="text", nullable=false, options={"default"="No description"})
     * @Groups({"book:read", "book:write", "genre:read", "author:read"})
     */
    private $description = 'No description';

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="text", nullable=false, options={"default"="img/book-default.jpg"})
     * @Groups({"book:read", "book:write", "genre:read", "author:read"})
     */
    private $img = '/img/books/book-default.jpg';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     * @Groups({"book:read"})
     */
    private $createdAt;

    

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="added_by", referencedColumnName="id")
     * })
     * @Groups({"book:read", "book:write"})
     */
    private $addedBy;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Genre", inversedBy="books")
     * @ORM\JoinTable(name="book_genre",
     *   joinColumns={
     *     @ORM\JoinColumn(name="book_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="genre_id", referencedColumnName="id")
     *   }
     * )
     * @Groups({"book:read", "book:write"})
     */
    private $genres;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Author", inversedBy="books")
     * @ORM\JoinTable(name="book_author",
     *   joinColumns={
     *     @ORM\JoinColumn(name="book_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="author_id", referencedColumnName="id")
     *   }
     * )
     * @Groups({"book:read", "book:write", "genre:read", "author:item:get"})
     * @MaxDepth(1)
     */
    private $authors;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->genres = new \Doctrine\Common\Collections\ArrayCollection();
        $this->authors = new \Doctrine\Common\Collections\ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }


    public function getAddedBy(): ?User
    {
        return $this->addedBy;
    }

    public function setAddedBy(?User $addedBy): self
    {
        $this->addedBy = $addedBy;
        return $this;
    }

    /**
     * @return Collection|Genre[]
     */
    public function getGenres(): Collection
    {
        return $this->genres;
    }

    
 
    public function addGenre(Genre $genre): self
    {
        if (!$this->genres->contains($genre)) {
            $this->genres[] = $genre;
        }

        return $this;
    }

    public function removeGenre(Genre $genre): self
    {
        if ($this->genres->contains($genre)) {
            $this->genres->removeElement($genre);
        }

        return $this;
    }

    /**
     * @return Collection|Author[]
     */
    public function getAuthors(): Collection
    {
        return $this->authors;
    }

    public function addAuthor(Author $author): self
    {
        if (!$this->authors->contains($author)) {
            $this->authors[] = $author;
        }

        return $this;
    }

    public function removeAuthor(Author $author): self
    {
        if ($this->authors->contains($author)) {
            $this->authors->removeElement($author);
        }

        return $this;
    }

}
