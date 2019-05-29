function get_need_response(method, endpoint, column, send_data) {
    // XMLHttpRequestオブジェクトを作成
    var request = new XMLHttpRequest();

    // Httpリクエストに必要な情報
    request.open(method, endpoint);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function () {
        var from_database_response = this.response;
        console.log(from_database_response);

        var choice_data = from_database_response[column];
        console.log(choice_data);

        document.write(choice_data);
        return choice_data;
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(send_data);
}
