<?php

namespace App\Validator;
use Psr\Log\LoggerInterface;
use App\Entity\User;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

final class GroupsGenerator
{
    private $authorizationChecker;

    public function __construct(AuthorizationCheckerInterface $authorizationChecker)
    {
        $this->authorizationChecker = $authorizationChecker;
    }

    public function __invoke(User $user): array
    {
        if ($this->authorizationChecker->isGranted('ROLE_ADMIN')) return ['admin-group:validation', 'default-group:validation'];
        else if($this->authorizationChecker->isGranted('ROLE_MODERATOR')) return ['moderator-group:validation', 'default-group:validation'];
        else if($this->authorizationChecker->isGranted('ROLE_USER')) return ['user-group:validation', 'default-group:validation'];
        else return ['anon-group:validation', 'default-group:validation'];
    
 
    }
}