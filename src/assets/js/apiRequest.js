var request = new XMLHttpRequest();

request.open('POST', 'http://localhost:8080/api/v1/auth/login', true);
request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
request.responseType = 'json';

request.onload = function() {
    var data = this.response;
    console.log(data);
};

var api_response = request.send('user_id=kmyan&password=opai1919');

document.write(api_response);