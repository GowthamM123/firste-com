import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const auth=getAuth();
const login=document.getElementById("login_button");
const login_email=document.getElementById("login_email");
const login_password=document.getElementById("login_password")  

  function login()
{
 
    var email=login_email.value;
  var password=login_password.value;
  
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => 
    {
    // Signed up 
    const user = userCredential.user;
    // ...
    if(userCredential.user){
      location.href="home.html";
    }
   
    })
    .catch((error) =>
     {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    if(error){
      alert("Please Enter Valid Email or Password")
    }
    }
    
  )
  
}



