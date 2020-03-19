<?php

namespace App\Entity;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;
use App\Entity\PasswordRestoreToken as PasswordToken;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\Collection;
use App\Validator\Constraints as VerificationAssert;
use App\Validator\GroupsGenerator;
/**
 * User
 * @ApiResource(
 *  normalizationContext={"groups"={"user:read"}},
 * collectionOperations={
 *      "get", 
 *      "post"={
 *          "security"="!is_granted('ROLE_USER')", 
 *          "denormalization_context"={"groups"={"user:post"}},
 *          "validation_groups"={"validation:post"}
 *       }
 * },
 * 
 * itemOperations={
 *      "get", 
 *      "patch"={
 *          "security"="object == user or !is_granted('ROLE_USER')",
 *          "denormalization_context"={"groups"={"user:patch"}},
 *          "validation_groups"=GroupsGenerator::class
 *      }
 * },
 * 
 *
 * )
 * 
 * @ORM\Table(name="users", uniqueConstraints={@ORM\UniqueConstraint(name="users_name_key", columns={"username"}), @ORM\UniqueConstraint(name="users_email_key", columns={"email"})})
 * @ORM\Entity
 * @UniqueEntity("username", message="Логин занят", groups={"validation:post", "admin-group:validation", "moderator-group:validation", "user-group:validation"})
 * @UniqueEntity("email", message="Email занят", groups={"validation:post"})
 * @ApiFilter(SearchFilter::class, properties={"email": "exact", "username": "exact"})
 * @VerificationAssert\VerificationCode(groups={"validation:post"})
 * @VerificationAssert\PasswordRestoreToken(groups={"anon-group:validation"})
 * @VerificationAssert\CurrentUserPassword(groups={"admin-group:validation", "moderator-group:validation", "user-group:validation"})
 */
class User implements UserInterface
{


    public function __construct(){
        $this->regDate = new \DateTime();
    }
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="users_id_seq", allocationSize=1, initialValue=1)
     * @Groups({"book:read", "user:read", "genre:read"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=255, nullable=false, unique=true)
     * @Groups({"book:read", "user:read"})
     * @Assert\NotBlank(groups={"validation:post"})
     * @Groups({"user:post", "user:patch", "genre:read"})
     */
    private $username;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=false, unique=true)
     * @Assert\NotBlank(groups={"validation:post"})
     * @Assert\Email(groups={"validation:post"})
     * @Groups("user:post")
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255, nullable=false)
     */
    private $password;

    /**
     * 
     * @Groups({"user:post","user:patch"})
     * @SerializedName("password")
     * 
     */
    private $plainPassword;

    /**
     * 
     * @SerializedName("current_password")
     * @Groups({"user:patch"})
     * 
     */
    private $currentPassword;

    /**
     * @SerializedName("restore_token")
     * @Groups({"user:patch"})
     * @Assert\NotBlank(groups={"anon-group:validation"}, message="Укажите код для восстановления пароля")
     */
    private $passwordRestoreToken;


    /**
     *  @SerializedName("verification_code")
     *  @Groups({"user:post"})
     *  @Assert\NotBlank(groups={"validation:post"}, message="Введите код для подверждения")
     *  
     */
    private $verificationCode;

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="text", nullable=false, options={"default"="img/profile-default.png"})
     * @Groups({"user:read", "user:patch"})
     */
    private $img = 'img/profile-default.png';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="reg_date", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     * @Groups({"user:read"})
     * @SerializedName("reg_date")
     */
    private $regDate;

    /**
     * @var array|null
     *
     * @ORM\Column(name="roles", type="json", nullable=true)
     * 
     */
    private $roles;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

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

    public function getRegDate(): ?\DateTimeInterface
    {
        return $this->regDate;
    }

    public function setRegDate(\DateTimeInterface $regDate): self
    {
        $this->regDate = $regDate;

        return $this;
    }

    


     /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): ?array
    {
        $roles = $this->roles;
        
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(?array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }

    public function getPlainPassword() : ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(string $plainPassword) : self
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

    public function getCurrentPassword() : ?string
    {
        return $this->currentPassword;
    }

    public function setCurrentPassword(string $currentPassword) : self
    {
        $this->currentPassword = $currentPassword;
        return $this;
    }


    public function getVerificationCode() : ?string
    {
        return $this->verificationCode;
    }

    public function setVerificationCode(string $verificationCode) : self
    {
        $this->verificationCode = $verificationCode;
        return $this;
    }

  
     public function getPasswordRestoreToken(): ?string
     {
         return $this->passwordRestoreToken;
     }

    public function setPasswordRestoreToken(string $token): self
    {
        $this->passwordRestoreToken = $token;

        return $this;
    }

    /**
     * @Groups("user:read")
     * @SerializedName("role")
     */
    public function getRoleString(){
        if(in_array('ROLE_ROOT', $this->roles)) return 'ROLE_ROOT';
        else if(in_array('ROLE_ADMIN', $this->roles)) return 'ROLE_ADMIN';
        else if(in_array('ROLE_MODERATOR', $this->roles)) return 'ROLE_MODERATOR';
        else if(in_array('ROLE_USER', $this->roles)) return 'ROLE_USER';
    }
}
