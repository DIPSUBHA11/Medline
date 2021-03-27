
var db = firebase.firestore();
function healty23(){

    
    var Firstname = document.getElementById("first1").value;
    var Lastname= document.getElementById("last1").value;
    var Username= document.getElementById("username1").value;
    var City=document.getElementById("city1").value;
    var State= document.getElementById("state1").value;
    var Gender= document.getElementById("gender1").value;
    var zip=  document.getElementById("zip1").value;
    var mail=document.getElementById("mail1").value;
    var Contact=document.getElementById("con1").value;


    

    // Add a new document in collection "cities"
db.collection("nurse").doc().set({
    Firstname: Firstname,
    Lastname: Lastname,
    Username:Username,
    City:City,
    State:State,
    Gender:Gender,
    Zip:zip,
    Email:mail,
    Contact:Contact


    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}