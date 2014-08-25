<?php

namespace Hug\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

use Elasticsearch\Client;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $params = array(
            'hosts' => array (
                '127.0.0.1:9200',
        ));

        $client = new Client($params);

        $getParams = array(
            'index' => 'toilet',
            'type'  => 'external',
            'id'    => '1',
        );
        $retDoc = $client->get($getParams);

        return new JsonResponse($retDoc);
    }
}
