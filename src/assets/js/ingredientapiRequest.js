
function get_need_response(method, endpoint, option, send_data) {
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

    food = "<table>";
    from_database_response.forEach(function( item ) {
      food = food + '<tr><td>' + item.food_name + '</td><td>　　</td><td>' + item.quantity + '</td></tr>';
    });
    food = food + "</table>";

    var doc0= document.getElementById("recipe_ingredient");
    doc0.innerHTML= food;

};

// Httpリクエストを送信(引数指定で特定の情報のみを送信)
request.send(send_data);
}

/*
材料表示する場所にこれをぶっこむ
<div id="recipe_ingredient"></div>
<script type="text/javascript" src="../js/ingredientapiRequest"></script>
<script>get_need_response('GET', 'http://54.238.92.95:8080/api/v1/ingredient/1','','')</script>
*/
