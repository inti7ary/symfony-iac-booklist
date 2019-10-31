<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;

class ProfileFormType extends AbstractType{

    public function buildForm(FormBuilderInterface $builder, array $options){

        $builder
            ->add('imgUrl', FileType::class, ['label' => 'Фото', 'required' => false, 'mapped' => false,
            'constraints' => [ new File(['mimeTypes' => ['image/jpeg',
            'image/png',
            'image/gif',], 'mimeTypesMessage' => 'Загрузите фото (Допустимый формат: JPG, PNG, GIF)'] ), new NotBlank(['message'=>'Загрузите фото']) ]
                
            
            ]);
                      
    }

}
