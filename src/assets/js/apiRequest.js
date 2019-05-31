function get_need_response(method, endpoint, column, parameters, callback) {
    // XMLHttpRequestオブジェクトを作成
    var request = new XMLHttpRequest();

    // Httpリクエストに必要な情報
    request.open(method, endpoint);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function () {
        response_from_database = this.response;
        // ステータスコードによって処理を変更
        if (request.status === 401) {
            alert("");
            console.log(response_from_database);
        } else {
            choice_data = response_from_database[column];
            console.log(choice_data);
        }

        // document.write(choice_data);
        callback(choice_data);
    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(parameters);
}
