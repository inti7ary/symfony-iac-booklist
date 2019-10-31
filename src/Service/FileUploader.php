<?php
namespace App\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{

    private $targetDir;

    public function __construct(){
        $this->targetDir = "img";
    }

    public function getTargetDir(){
        return $this->targetDir;
    }

    public function upload(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $fileName = 'img_'.uniqid().'-'.uniqid().'.'.$file->guessExtension();
        $fileUrl = $this->getTargetDir()."/".$fileName;

        try {
            $file->move($this->getTargetDir(), $fileName);
        } catch (FileException $e) {
            
        }

        return $fileUrl;
    }

    
}