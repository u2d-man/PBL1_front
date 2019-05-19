function requestAjax(endpoint, callback) {
    var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
                callback(this.response);
    }
    // };
    xhr.responseType = 'json';
    xhr.open('GET', endpoint, true);
    xhr.send();
}

requestAjax("localhost:8080/api/v1/recipe/1", function(response) {

});
