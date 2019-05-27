<?php
$url = ;

// 処理開始
$curl = curl_init($url);
// メソッドの指定
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
// 証明書の検証を行わない
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
// レスポンスを文字列で受け取る
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// レスポンスを変数に入れる
$response = curl_exec($curl);

// curlの処理を終了
curl_close($curl);
