<?php
$signInId = $_POST['user_id'];
$password = $_POST['password'];
?>

echo <<<EOM
<script type="text/javascript" src="../js/apiRequest.js">
var loginId = <?php echo json_encode($signInId); ?>;
var password = <?php echo json_encode($password); ?>;

var response = get_login_response('POST', 'http://54.238.92.95:8080/api/v1/auth/login',
    'user_id='+ loginId + '&' + password + 'password=opai1919');

    if (response == true) {
        console.log('true')
    } else {
        console.log('false')
    }
</script>
EOM



