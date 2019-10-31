<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;


class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    { 
        $builder
            ->add('username', TextType::class, ['label'=>'Введите логин',  'required' => false, 'empty_data' => ''])
            ->add('plainPassword', RepeatedType::class, [
                'mapped' => false,
                'constraints' => new NotBlank(["message" => "Введите пароль"]),
                'type' => PasswordType::class,
                'first_options'  => array('label' => 'Введите пароль'),
                'second_options' => array('label' => 'Подтвердите пароль'),
                'invalid_message' => 'Пароли не совпадают',
                'required' => false
                
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {

        
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
