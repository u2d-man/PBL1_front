<?php
$url = 'http://54.238.92.95:8080/api/v1/auth/login';

$params = [
    'user_id' => $_POST['signInId'],
    'password' => $_POST['password'],
];

/* 処理手順 ...
処理を始める
オプションをセット(随時必要なオプションを調べる)
実行
処理を終了
*/
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, TRUE);
// パラメータをセット
curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);
