<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use App\Service\FileUploader;
use App\Form\ProfileFormType;

class ProfileController extends AbstractController{

    /**
     * @Route("/profile", name="profile")
     */
    public function profile(SessionInterface $session, FileUploader $fileUploader, Request $request){

        $user = $this->getUser();
        if(!$this->getUser()) return $this->redirectToRoute("index");


        $form = $this->createForm(ProfileFormType::class);
        $form->handleRequest($request);

        
        $debug = "start";
        if($form->isSubmitted()) $debug = "finish";
        if($form->isSubmitted() && $form->isValid()){
            $imgUrl = $fileUploader->upload($form->get('imgUrl')->getData());
            $entityManager = $this->getDoctrine()->getManager();
            $updatedUser = $entityManager->getRepository(User::class)->find($this->getUser()->getId());
            $updatedUser->setImgUrl($imgUrl);
            $entityManager->flush();
            

        }

        return $this->render('profile.html.twig', ["user" => $user, "form" => $form->createView(), "debug" => $debug]);
        
    }

    
    /**
     * @Route("/usermanagment", name="usermanagment")
     * 
     */
    public function manage(){
        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findBy([], ['id' => 'DESC']);
        return $this->render("usermanagment.html.twig", ["users" => $users]);
    }

    /**
     * @Route("/user/{id<id\d+>}", name="user")
     */
    public function user($id){
        $id = substr($id, 2);
        $repository = $this->getDoctrine()->getRepository(User::class);
        $user = $repository->find($id);
        return $this->render("user.html.twig", ["user" => $user]);
    }

    
}