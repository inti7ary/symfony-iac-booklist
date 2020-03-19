<?php

namespace App\Validator\Constraints;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use App\Validator\Constraints\PasswordRestoreToken;
use App\Entity\PasswordRestoreToken as PREntity;
class PasswordRestoreTokenValidator extends ConstraintValidator
{

    private $em;
    public function __construct(EntityManagerInterface $em){
        $this->em = $em;
    }

    public function validate($user, Constraint $constraint)
    {
        
        if (!$constraint instanceof PasswordRestoreToken) {
            throw new UnexpectedTypeException($constraint, PasswordRestoreToken::class);
        }

        // custom constraints should ignore null and empty values to allow
        // other constraints (NotBlank, NotNull, etc.) take care of that
        if (null === $user) {
            return;
        }

       // if (!$user->getPlainPassword()) return;


    
        $trueToken = $this->em->getRepository(PREntity::class)
                ->findOneBy(['email' => $user->getEmail()], ['expiresAt' => 'DESC']);
        $userToken = strtoupper($user->getPasswordRestoreToken());
        
        $violationMessage = '';
        
        if(!$userToken) $violationMessage = 'Укажите код для восстановления пароля';
        else if($trueToken === null) {
            $violationMessage = 'Код восстановления пароля не был сгенерирован';//'Срок действия кода истёк';
        }else if($trueToken->getToken() === $userToken
                 && $trueToken->getExpiresAt() <= new \DateTime()){
            $violationMessage = 'Срок действия кода истёк';
        }else if($trueToken->getToken() !== $userToken){
            $violationMessage = 'Код восстановления пароля не совпадает';
        }

        if ($violationMessage) {
            
            
            $this->context->buildViolation($violationMessage)
                ->atPath('restore_token')
                ->setParameter('{{ string }}', $userToken)
                ->addViolation();
        }else if(!$user->getPlainPassword()){
            $violationMessage = 'Укажите новый пароль';
            $this->context->buildViolation($violationMessage)
                ->atPath('password')
                ->setParameter('{{ string }}', '')
                ->addViolation();

        }
    }
}