<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class BookFormType extends AbstractType{

    public function buildForm(FormBuilderInterface $builder, array $options){

        $builder
            ->add('title', TextType::class, ['label'=>'Название книги',  'required' => false, 'empty_data' => ''])
            ->add('author', TextType::class, ['label'=>'Автор',  'required' => false, 'empty_data' => ''])
            ->add('genre', ChoiceType::class, ['label' => 'Жанр', "choices" => [
                "История" => "история" ,
                "Фантастика" => "фантастика" ,
                "Наука" => "наука",
                "Биография" => "биография",
                "Другое" => "другое"

            ]])
            ->add('imgUrl', FileType::class, ['label' => 'Фото', 'required' => false, 'mapped' => false,
            'constraints' => [ new File(['mimeTypes' => ['image/jpeg',
            'image/png',
            'image/gif'], 'mimeTypesMessage' => 'Загрузите фото (Допустимый формат: JPG, PNG, GIF)'] ) ]
                
            
            ])
            ->add('description', TextareaType::class, ['label'=>'Описание',  'required' => false, 'empty_data' => '']);





            
            
    }

}
