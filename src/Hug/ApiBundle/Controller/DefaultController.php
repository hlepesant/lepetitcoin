<?php

namespace Hug\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('HugApiBundle:Default:index.html.twig', array('name' => $name));
    }
}
