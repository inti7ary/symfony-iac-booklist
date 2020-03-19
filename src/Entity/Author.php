<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiSubresource;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;



/**
 * Author
 * @ApiFilter(PropertyFilter::class, 
 * arguments={
 * "parameterName": "properties", 
 * "overrideDefaultProperties": false, 
 * "whitelist": {"id", "firstName", "surname", "patronymic", "description"}}
 * )
 * @ApiResource(
 * attributes={"pagination_items_per_page":10},
 * normalizationContext={"groups"={"author:read"}},
 * denormalizationContext={"groups"={"author:write"}},
 * 
 * collectionOperations={
 * "get",
 * "post"={"security"="is_granted('ROLE_MODERATOR')"},
 * },
 * 
 * itemOperations={
 *      "get"={"normalization_context"={"groups"={"author:item:get", "author:read"},
 *             "enable_max_depth"=true}
 *      },
 *      "delete"={"security"="is_granted('ROLE_MODERATOR')"}, 
 *      "put"={"security"="is_granted('ROLE_MODERATOR')"},
 *      "patch"={"security"="is_granted('ROLE_MODERATOR')"}
 * },
 * attributes={
 * "pagination_items_per_page":10, "order":{"surname" :"ASC"},
 * "pagination_client_enabled"=true
 * }
 * 
 * )
 * @ORM\Table(name="author")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\AuthorRepository")
 * 
 */
class Author
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="authors_id_seq", allocationSize=1, initialValue=1)
     * @Groups({"book:read", "author:read", "genre:read"})
     */
    private $id;

    /**
     * @var string
     * 
     * @ORM\Column(name="first_name", type="string", length=255, nullable=false)
     * @Groups({"author:read", "author:write", "book:read", "genre:read"})
     * @SerializedName("first_name")
     * @Assert\NotBlank(message="Укажите имя")
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="surname", type="string", length=255, nullable=false)
     * @Groups({"author:read", "author:write", "book:read", "genre:read"}, )
     * @Assert\NotBlank(message="Укажите фамилию")
     */
    private $surname;

    /**
     * @var string|null
     *
     * @ORM\Column(name="patronymic", type="string", length=255, nullable=true)
     * @Groups({"author:read", "author:write", "book:read", "genre:read"})
     */
    private $patronymic;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=false, options={"default"="No description"})
     * @Groups({"author:read", "author:write"})
     * @Assert\NotBlank(message="Укажите описание")
     */
    private $description = 'No description';

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="text", nullable=false, options={"default"="img/author-default.jpg"})
     * @Groups({"author:read", "author:write"})
     */
    private $img = '/img/authors/author-default.jpg';

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Book", mappedBy="authors")
     * @ApiSubresource()
     */
    private $books;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->books = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $fname): self
    {
        $this->firstName = $fname;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): self
    {
        $this->surname = $surname;

        return $this;
    }

    public function getPatronymic(): ?string
    {
        return $this->patronymic;
    }

    public function setPatronymic(?string $patronymic): self
    {
        $this->patronymic = $patronymic;

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

    /**
     * @return Collection|Book[]
     */
    public function getBook(): Collection
    {
        return $this->books;
    }

    public function addBook(Book $book): self
    {
        if (!$this->books->contains($book)) {
            $this->books[] = $book;
            $book->addAuthor($this);
        }

        return $this;
    }

    public function removeBook(Book $book): self
    {
        if ($this->books->contains($book)) {
            $this->books->removeElement($book);
            $book->removeAuthor($this);
        }

        return $this;
    }

    /**
     * @return Collection|Book[]
     */
    public function getBooks(): Collection
    {
        return $this->books;
    }

    
    // public function getInitials(){
    //     return mb_substr($this->firstName, 0, 1).'. '.(($this->patronymic) ? mb_substr($this->patronymic, 0, 1).'. '.$this->surname : $this->surname);
    // }

}
