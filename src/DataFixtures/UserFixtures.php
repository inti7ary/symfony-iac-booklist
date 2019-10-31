<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\User;
class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername("username");
        $user->setPassword(password_hash("qwerty", PASSWORD_DEFAULT));
        $user->setImgUrl("img/profile-default.png");
        $user->setRegDate(new \DateTime());
        $manager->persist($user);

        $manager->flush();
    }
}
