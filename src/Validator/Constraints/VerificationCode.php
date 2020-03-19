<?php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use App\Validator\Constraints\VerificationCodeValidator;
/**
 * @Annotation
 */
class VerificationCode extends Constraint
{
    public $message = 'Код подтверждения не совпадает';


    public function validatedBy()
    {
        return get_class($this).'Validator';
    }

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}