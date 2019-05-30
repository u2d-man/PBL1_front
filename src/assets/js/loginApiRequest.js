function get_login_info_response(method, endpoint, parameters, callback) {
    // XMLHttpRequestオブジェクトを作成
    var request = new XMLHttpRequest();

    // Httpリクエストに必要な情報
    request.open(method, endpoint);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function() {
        response_from_database = this.response;
        // ステータスコードによって処理を変更
        if (request.status === 401) {
            alert("IDかパスワードが違います。");
            console.log(response_from_database);
        } else if (request.status === 200) {
            true_or_false = response_from_database['is_admin'];
            console.log(true_or_false);
        }

        callback(true_or_false)
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(parameters);
}

