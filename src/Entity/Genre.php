<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

/**
 * Genre
 * @ApiFilter(PropertyFilter::class, 
 * arguments={
 * "parameterName": "properties", 
 * "overrideDefaultProperties": false, 
 * "whitelist": {"id", "name", "description"}}
 * )
 * 
 * @ApiResource(
 * attributes={
 * "pagination_items_per_page":10, "order":{"name": "ASC"},
 * "pagination_client_enabled"=true
 * },
 * normalizationContext={"groups"={"genre:read"}},
 * denormalizationContext={"groups"={"genre:write"}},
 * 
 * collectionOperations={
 * "get",
 * "post"={"security"="is_granted('ROLE_MODERATOR')"},
 * },
 * 
 * itemOperations={
 *      "get"={
 *          "normalization_context"={"groups"={"genre:read", "genre:item:get"}}
 *      },
 *      "delete"={"security"="is_granted('ROLE_MODERATOR')"},
 *      "put"={"security"="is_granted('ROLE_MODERATOR')"},
 *      "patch"={"security"="is_granted('ROLE_MODERATOR')"}
 * }
 * )
 * @ORM\Table(name="genre", uniqueConstraints={@ORM\UniqueConstraint(name="genres_name_key", columns={"name"})})
 * @ORM\Entity
 * @UniqueEntity("name", message="Жанр с таким названием уже существует")
 */

class Genre
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="genres_id_seq", allocationSize=1, initialValue=1)
     * @Groups({"book:read", "genre:read"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     * @Groups({"book:read", "genre:read", "genre:write"})
     * @Assert\NotBlank(message="Укажите название")
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=false, options={"default"="No description"})
     * @Groups({"genre:read", "genre:write"})
     * @Assert\NotBlank(message="Укажите описание")
     */
    private $description = 'No description';


     /**
     * @var string
     *
     * @ORM\Column(name="img", type="text", nullable=false, options={"default"="img/genre-default.jpg"})
     * @Groups({"genre:read", "genre:write"})
     */
    private $img = '/img/genres/genre-default.jpg';


    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\ManyToMany(targetEntity="Book", mappedBy="genres")
     * @Groups({"genre:item:get", "genre:write"})
     * 
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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

    /**
     * @return Collection|Book[]
     */
    public function getBooks(): Collection
    {
        return $this->books;
    }

    public function addBook(Book $book): self
    {
        if (!$this->books->contains($book)) {
            $this->books[] = $book;
            $book->addGenre($this);
        }
        return $this;
    }

    public function removeBook(Book $book): self
    {
        
        if ($this->books->contains($book)) {
            $this->books->removeElement($book);
            $book->removeGenre($this);
        }

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

}
