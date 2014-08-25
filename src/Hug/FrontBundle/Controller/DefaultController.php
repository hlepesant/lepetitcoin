<?php

namespace Hug\FrontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{

    protected $gmapApiKey = 'AIzaSyD44nVqyowZavw5glqeNwIHWOkfqAu_Yyg';
    protected $gmapAPiLanguage = 'fr';

    public function indexAction()
    {
        return $this->render('HugFrontBundle:Default:index.html.twig', array(
            'apikey' => $this->gmapApiKey,
            'apilanguage' => $this->gmapAPiLanguage
        ));
    }
}
