firebase.auth().onAuthStateChanged( function(user){
  if (user) {
    // User is signed in.
   
   
    document.getElementById("login_div").style.display = "block";
    document.getElementById("user_div").style.display = "block";

    
  } else {
    // No user is signed in.

  
    document.getElementById("login_div").style.display = "block";
    document.getElementById("user_div").style.display = "block";
  }
});


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then(function(){
    window.location.href='main.html';
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
