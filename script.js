import { getAuth,createUserWithEmailAndPassword } from  "firebase/auth";
const auth=getAuth();
  const sign_email=document.getElementById("E-mail");
  const sign_password=document.querySelector(".password");
  const cpassword=document.getElementById("cpassword");
  const para=document.getElementById("message")
const signup=document.getElementById("sign_up_button")



function siginup()
{
 
  var email=sign_email.value;
  var password=cpassword.value;
  var newpassword=sign_password.value;
  if(newpassword==password)
  {
    createUserWithEmailAndPassword(auth, email, password)
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

        else
          {
              console.log("not same")
              alert("Password not Matched")   
          }
        }


