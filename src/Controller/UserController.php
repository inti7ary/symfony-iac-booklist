<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends AbstractController{


    /**
     * @Route("/users/img", name="users_img", methods={"POST"})
     */
    public function postUserImg(Request $request){
        $file = $request->files->get('img');

        $new_file_name = uniqid('user_').substr(md5(random_bytes(10)), 0, 25).'.'.$file->guessExtension();


        $file_path = '/img/users/user-default.jpg';

        try{
            $file->move(
            $this->getParameter('users_img_directory'),
            $new_file_name);
            

            $file_path ='/img/users/'.$new_file_name;
        }catch(FileException $e){
          
        }
       

        $response = new JsonResponse();

        $response->setData(['img' => $file_path]);

        return $response;
    }

    /**
     * @Route("/profile", name="profile")
     */
    public function profile(){

        return $this->render('profile.html.twig');
        
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
     * @Route("/users/{id<\d+>}", name="users")
     */
    public function user($id){
        // $id = substr($id, 2);
        // $repository = $this->getDoctrine()->getRepository(User::class);
        // $user = $repository->find($id);
        return $this->render("profile.html.twig", ["user_id" => $id]);
    }

    
}