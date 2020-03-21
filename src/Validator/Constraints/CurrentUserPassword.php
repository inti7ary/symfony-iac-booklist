<?php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use App\Validator\Constraints\CurrentUserPasswordValidator;
/**
 * @Annotation
 */
class CurrentUserPassword extends Constraint
{
    public $message = 'Пароль не совпадает';


    public function validatedBy()
    {
        return get_class($this).'Validator';
    }

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}