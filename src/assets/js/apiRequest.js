function get_need_response(method, endpoint, option, send_data) {
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

        var choice_data = response_data[option];
        console.log(choice_data);

        return choice_data;
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(send_data);
}
