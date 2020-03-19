<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\VerificationCode;
use App\Entity\PasswordRestoreToken as PasswordToken;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Entity\User;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController{


    /**
     * @Route("/signup", name="app_signup")
     */
    public function signup(){

        return $this->render('registration/register.html.twig');
    }

    /**
     * @Route("/login", name="signin", methods={"GET"})
     */
    public function showLoginForm()
    {
        if(!$this->getUser()){
            return $this->render('security/login.html.twig');
   
        }else return $this->redirectToRoute("home");
    }

    /**
     * @Route("/login", name="app_login", methods={"POST"})
     */
    public function login()
    {
         return $this->json([
            'user' => $this->getUser() ? $this->getUser()->getId() : null]
        );
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    /**
     * @Route("/password/restore", name="password_restore", methods={"GET"})
     */
    public function showPasswordRestoreForm(){

        if($this->getUser()){
            return $this->redirectToRoute("home");
            
        }else return $this->render("security/password_restore.html.twig");
        
    }

    /**
     * @Route("/password/restore", methods={"POST"})
     */
    public function generatePasswordRestoreToken(Request $request,
    LoggerInterface $logger, ValidatorInterface $validator,
     MailerInterface $mailer){
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');

        $logger->debug("request: ".$request);
        $request_data = json_decode($request->getContent(), $assoc = true);

        $logger->debug("count: ".count($request_data));

        $email = $request_data['email'];

        if($this->getUser()){
            $message = "Отказано в доступе";
            $response->setContent(json_encode([
                    'message' => $message
            ]));
        $response->setStatusCode(403);
        return $response;
        }

        //validating an email
        $emailConstraint = new Assert\Email();
        $errors = $validator->validate($email, $emailConstraint);

        //response on invalid format
        if(count($errors) > 0){
            $message = "Некорректный формат электронной почты";
             $response->setContent(json_encode([
                    'message' => $message
            ]));
        $response->setStatusCode(400);
        return $response;

        }else if(!$this->getDoctrine()->getManager()
            ->getRepository(User::class)->findBy(['email' => $email])){
                $message = "Аккаунт с таким адресом электронной почты не существует";
                $response->setContent(json_encode([
                       'message' => $message
               ]));
               $response->setStatusCode(400);
               return $response;
        }

       
        $user = $this->getDoctrine()->getManager()
        ->getRepository(User::class)->findBy(['email' => $email])[0];

        //generating code
        $rawToken = strtoupper(substr(md5(random_bytes(42)), 0, 36));

        $token = new PasswordToken();
        $token->setToken($rawToken);
        $token->setEmail($user->getEmail());
        //persist to db
        $em = $this->getDoctrine()->getManager();
        $em->persist($token);
        $em->flush();

        //send email
        
        $restorationEmail = new Email();
        $restorationEmail->to($email);
        $restorationEmail->text("Код для восстановления пароля: ".$rawToken);
        $restorationEmail->subject('Восстановление пароля');
        $restorationEmail->from('j129q18@gmail.com');

        $mailer->send($restorationEmail);
        /** ... */
        
        //response on success
        $message = 'Код для восстановления пароля был отправлен на почту '.$email;
        $response->setContent(json_encode([
            'message' => $message,
            'id' => $user->getId()
            ]));
        $response->setStatusCode(200);

        return $response;


    }




    /**
     * @Route("/verification_code/generate", methods={"POST"}, name="verification_code_generate")
     * 
     */
    public function generateVerificationCode(Request $request,
     LoggerInterface $logger, ValidatorInterface $validator,
      MailerInterface $mailer): Response
    {

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');

        $request_data = json_decode($request->getContent(), $assoc = true);
        $email = $request_data['email'];

        if($this->getUser()){
            $message = "Отказано в доступе";
            $response->setContent(json_encode([
                    'message' => $message
            ]));
        $response->setStatusCode(403);
        return $response;
        }

        //validating an email
        $emailConstraint = new Assert\Email();
        $errors = $validator->validate($email, $emailConstraint);

        //response on invalid format
        if(count($errors) > 0){
            $message = "Некорректный формат электронной почты";
             $response->setContent(json_encode([
                    'message' => $message
            ]));
        $response->setStatusCode(400);
        return $response;

        }else if($this->getDoctrine()->getManager()
            ->getRepository(User::class)->findBy(['email' => $email])){
                $message = "Аккаунт с таким адресом электронной почты уже существует";
                $response->setContent(json_encode([
                       'message' => $message
               ]));
               $response->setStatusCode(400);
               return $response;
        }


        //generating code
        $rawCode = strtoupper(substr(md5(random_bytes(14)), 0, 8));

        $code = new VerificationCode();
        $code->setCode($rawCode);
        $code->setEmail($email);
        //persist to db
        $em = $this->getDoctrine()->getManager();
        $em->persist($code);
        $em->flush();

        //send email
        
        $verificationEmail = new Email();
        $verificationEmail->to($email);
        $verificationEmail->text("Ваш код для подтверждения регистрации: ".$rawCode);
        $verificationEmail->subject('Подтверждение регистрации');
        $verificationEmail->from('j129q18@gmail.com');

        $mailer->send($verificationEmail);
        /** ... */
        
        //response on success
        $message = 'Код для подтверждения регистрации был отправлен на почту '.$email;
        $response->setContent(json_encode([
            'message' => $message
            ]));
        $response->setStatusCode(200);

        return $response;
    }

    

}