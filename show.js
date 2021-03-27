var db= firebase.firestore();
/*const list_div = document.getElementById("list_div");*/

const list_div=document.getElementById("list_div");

db.collection("nurse").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
     {
  list_div.innerHTML+="<tbody id ='list_div'><tr><td>"+ doc.data().Firstname +"</td><td>"+ doc.data().Email +"</td> <td>"+ doc.data().City+"</td><td>"+ doc.data().Username+"</td><td>"+ doc.data().Gender+"</td><td>"+ doc.data().Contact+"</td></tr></tbody>"
      
       
        
    });
});


