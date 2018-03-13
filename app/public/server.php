<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://app_dev.cannabisbigdata.co/cbd/api/PowerBI/Token/' + $_COOKIE['reportID'];);
$request->setRequestMethod('GET');
$request->setHeaders(array(
  'Cache-Control' => 'no-cache'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();?>
