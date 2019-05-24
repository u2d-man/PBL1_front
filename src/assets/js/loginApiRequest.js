function get_login_response(method, endpoint, send_data) {
    // XMLHttpRequestオブジェクトを作成
    var request = new XMLHttpRequest();

    // Httpリクエストに必要な情報
    request.open(method, endpoint);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function () {
        var response_data = this.response;
        console.log(response_data);

        var true_or_false = response_data['is_admin'];
        console.log(true_or_false);

        return true_or_false;
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(send_data);
}