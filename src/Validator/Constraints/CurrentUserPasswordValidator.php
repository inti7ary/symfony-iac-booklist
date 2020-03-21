<?php

namespace App\Validator\Constraints;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use App\Validator\Constraints\CurrentUserPassword;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
class CurrentUserPasswordValidator extends ConstraintValidator
{

    private $em;
    private $encoder;
    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $encoder){
        $this->em = $em;
        $this->encoder=  $encoder;
    }

    public function validate($user, Constraint $constraint)
    {
        
        if (!$constraint instanceof CurrentUserPassword) {
            throw new UnexpectedTypeException($constraint, PasswordRestoreToken::class);
        }

        // custom constraints should ignore null and empty values to allow
        // other constraints (NotBlank, NotNull, etc.) take care of that
        if (null === $user) {
            return;
        }

        //skip validation if password hasn't been updated 
        if(!$user->getPlainPassword()) return;

        $violationMessage = '';
        if(!$user->getCurrentPassword()) $violationMessage = 'Укажите пароль';
        
        if(!$this->encoder
        ->isPasswordValid($user, $user->getCurrentPassword())){
            $violationMessage = 'Пароль не совпадает';
        }

        if ($violationMessage) {
            
            
            $this->context->buildViolation($violationMessage)
                ->atPath('current_password')
                ->setParameter('{{ string }}', $user->getCurrentPassword())
                ->addViolation();
        }
    }
}