<?php
namespace App\Service;
class RoleHelper{

static public function roleToString($role){
    $result = "";
    if($role == "ROLE_USER") $result = "пользователь";
    else if($role == "ROLE_MODERATOR") $result = "модератор";
    else if($role == "ROLE_ADMIN") $result = "администратор";
    return $result;
}

static public function getRoleTextClass($role){
    $result = "";
    if($role == "ROLE_USER") $result = "";
    else if($role == "ROLE_MODERATOR") $result = "text-primary";
    else if($role == "ROLE_ADMIN") $result = "text-danger";
    return $result;

}

}
?>