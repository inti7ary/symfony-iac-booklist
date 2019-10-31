<?php 

namespace App\Service;

class PaginationHelper{

    public static function getPagination($items_total, $requestedPage, $limitPerPage, $additional = []){

        $pages_total =  ($items_total) ? ceil($items_total / $limitPerPage) : 1;
        $pages_start = ($requestedPage - 2 <= 0) ? 1 : $requestedPage - 2;
        $pages_end = ($requestedPage + 2 >= $pages_total) ? $pages_total : $requestedPage + 2;
        
        
        $pagination = ["pages_total" => $pages_total, "pages_start" => $pages_start, "pages_end" => $pages_end, "requested_page" => $requestedPage, "additional" => $additional];
        return $pagination;
    }

    
}