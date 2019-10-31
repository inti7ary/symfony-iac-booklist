<?php

namespace App\Service;

class CategoryTranslator{

    public static function translate($category){
        $res = "";
        switch($category){
            case "history": $res = "история"; break;
            case "fantasy": $res = "фантастика"; break;
            case "science": $res = "наука"; break;
            case "biography": $res = "биография"; break;
            case "other": $res = "другое"; break;
        }
        
        return $res;

    }
}