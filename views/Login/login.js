$(document).ready(function() {
    $('#login_button').click(function(event){
        event.preventDefault(); // prevents refresh
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(firebase);
        console.log(firebase.auth());
        firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    });
});