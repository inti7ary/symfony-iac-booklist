<?php
namespace App\Serializer;
use ApiPlatform\Core\Serializer\SerializerContextBuilderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Psr\Log\LoggerInterface;
final class AdminGroupsContextBuilder implements SerializerContextBuilderInterface
{
    private $decorated;
    private $authorizationChecker;
    public function __construct(SerializerContextBuilderInterface $decorated, AuthorizationCheckerInterface $authorizationChecker)
    {
        $this->decorated = $decorated;
        $this->authorizationChecker = $authorizationChecker;
    }
    public function createFromRequest(Request $request, bool $normalization, ?array $extractedAttributes = null): array
    {
        $context = $this->decorated->createFromRequest($request, $normalization, $extractedAttributes);
        $isAnon = !$this->authorizationChecker->isGranted('ROLE_USER');
        $isModerator = $this->authorizationChecker->isGranted('ROLE_MODERATOR');
        $isUser =  $this->authorizationChecker->isGranted('ROLE_USER') && !$this->authorizationChecker->isGranted('ROLE_MODERATOR');
        $resourceClass = $context['resource_class'] ?? null;

        if(isset($context['groups']) && $isAnon){
            $context['groups'][] = $normalization ? 'anon-group:read' : 'anon-group:write';
        }
        else if(isset($context['groups']) && $isUser){
            $context['groups'][] = $normalization ? 'user-group:read' : 'user-group:write';
        }
        else if(isset($context['groups']) && $isModerator){
            $context['groups'][] = $normalization ? 'moderator-group:read' : 'moderator-group:write';
        }
        
        return $context;
    }
}