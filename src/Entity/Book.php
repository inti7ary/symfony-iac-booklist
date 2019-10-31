<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 */
class Book
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Заполните поле")
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Заполните поле")
     */
    private $author;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Заполните поле")
     */
    private $genre;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Заполните поле")
     */
    private $description;

    /**
     * @ORM\Column(type="text")
     */
    private $imgurl;

    /**
     * @ORM\Column(type="integer")
     */
    private $premoderation;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $addedby;


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

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

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

    public function getImgurl(): ?string
    {
        return $this->imgurl;
    }

    public function setImgurl(string $imgurl): self
    {
        $this->imgurl = $imgurl;

        return $this;
    }

    public function getPremoderation(): ?int
    {
        return $this->premoderation;
    }

    public function setPremoderation(int $premoderation): self
    {
        $this->premoderation = $premoderation;

        return $this;
    }

    public function getAddedby(): ?string
    {
        return $this->addedby;
    }

    public function setAddedby(string $addedby): self
    {
        $this->addedby = $addedby;

        return $this;
    }
}
