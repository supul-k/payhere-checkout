<?php

$merchant_id = '1226780'; // Replace your Merchant ID
$merchant_secret = 'MjM5NjgxODE2NTE4NTE0OTUyNDg2ODE3MzMzMzM0MjQyNTAyNzM5'; // Replace your Merchant Secret
$order_id = 'ItemNo12345';
$amount = 1000;
$currency = 'LKR';

$hash = strtoupper(
    md5(
        $merchant_id . 
        $order_id . 
        number_format($amount, 2, '.', '') . 
        $currency .  
        strtoupper(md5($merchant_secret)) 
    ) 
);

$array = [];
$array['merchant_id'] = $merchant_id;
$array['return_url'] = 'http://localhost:8080/PHP-CRUD/payhereSuccess.php';
$array['cancel_url'] = 'http://localhost:8080/PHP-CRUD/payhereCancel.php';
$array['notify_url'] = 'http://localhost:8080/PHP-CRUD/payhereNotify.php';
$array['order_id'] = $order_id;
$array['items'] = 'Door bell wireless';
$array['amount'] = number_format($amount, 2, '.', '');
$array['currency'] = $currency;
$array['hash'] = $hash;

$json = json_encode($array);


echo $json;

?>