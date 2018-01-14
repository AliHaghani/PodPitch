$(document).ready(function() {
    $('#login_button').click(function(event){
        event.preventDefault(); // prevents refresh
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(firebase);
        console.log(firebase.auth());
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    });
});