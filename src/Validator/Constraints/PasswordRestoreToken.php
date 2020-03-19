<?php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use App\Validator\Constraints\PasswordRestoreTokenValidator;
/**
 * @Annotation
 */
class PasswordRestoreToken extends Constraint
{
    public $message = 'Код восстановления пароля не совпадает';


    public function validatedBy()
    {
        return get_class($this).'Validator';
    }

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}