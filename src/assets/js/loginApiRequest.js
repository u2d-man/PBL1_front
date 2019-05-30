function get_login_info_response(method, endpoint, send_data, callback) {
    // XMLHttpRequestオブジェクトを作成
    var request = new XMLHttpRequest();

    // Httpリクエストに必要な情報
    request.open(method, endpoint);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function() {
        from_database_response = this.response;
        if (request.status === 401) {
            alert("IDかパスワードが違います。")
        }
        console.log(from_database_response);

        true_or_false = from_database_response['is_admin'];
        console.log(true_or_false);

        callback(true_or_false)
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(send_data);
}

