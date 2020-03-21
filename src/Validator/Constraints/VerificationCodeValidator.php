<?php

namespace App\Validator\Constraints;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use App\Validator\Constraints\VerificationCode;
use App\Entity\VerificationCode as VCEntity;
class VerificationCodeValidator extends ConstraintValidator
{

    private $em;
    public function __construct(EntityManagerInterface $em){
        $this->em = $em;
    }

    public function validate($user, Constraint $constraint)
    {
        
        if (!$constraint instanceof VerificationCode) {
            throw new UnexpectedTypeException($constraint, VerificationCode::class);
        }

        // custom constraints should ignore null and empty values to allow
        // other constraints (NotBlank, NotNull, etc.) take care of that
        if (null === $user) {
            return;
        }

    
        $trueCode = $this->em->getRepository(VCEntity::class)
                ->findOneBy(['email' => $user->getEmail()], ['expiresAt' => 'DESC']);
        $userCode = strtoupper($user->getVerificationCode());
        
        $violationMessage = '';
        if($trueCode === null) {
            $violationMessage = 'Код подтверждения не был сгенерирован';//'Срок действия кода истёк';
        }else if($trueCode->getCode() === $userCode 
                 && $trueCode->getExpiresAt() <= new \DateTime()){
            $violationMessage = 'Срок действия кода истёк';
        }else if($trueCode->getCode() !== $userCode){
            $violationMessage = 'Код подтверждения не совпадает';
        }

        if ($violationMessage) {
            // the argument must be a string or an object implementing __toString()
            $this->context->buildViolation($violationMessage)
                ->atPath('verification_code')
                ->setParameter('{{ string }}', $userCode)
                ->addViolation();
        }
    }
}