(function() {
    var requestAjax = function(endpoint, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.response);
            }
        };
        xhr.responseType = 'json';
        xhr.open('GET', endpoint, true);
        xhr.send();
    };
})();

requestAjax("localhost:8080/api/v1/recipe/1", function(response) {

});
