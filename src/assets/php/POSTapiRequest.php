<?php
$url = ;

$params = [
    '' => '',
    ...
];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, TRUE);
// パラメータをセット
curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
// 証明書の検証を行わない
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
// レスポンスを文字列で受け取る
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// レスポンスを変数に入れる
$response = curl_exec($curl);

// curlの処理を終了
curl_close($curl);
