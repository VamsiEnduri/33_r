import { authentication, db } from "./fbConfig.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
import {doc,getDoc} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js"
document.addEventListener("DOMContentLoaded",()=>{
    let loginform=document.getElementById("loginForm");

    loginform.addEventListener("submit",async(e)=>{
        e.preventDefault()
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let role=document.getElementById("role").value;

       const userSignedIn= await signInWithEmailAndPassword(authentication, email, password)

       const nameSeller=userSignedIn.user.displayName;

       const userDocRef=doc(db,`${role}s`,userSignedIn.user.displayName)

       const finalDocRef=await getDoc(userDocRef) //it will get the doc from fb based on the ref

       if(finalDocRef.exists()){

               console.log(userSignedIn,"usersigned")
       alert(`${role} is loggedin`)
       location.href=`${role}DashBoard.html`

       localStorage.setItem("sellerCredentails",JSON.stringify({email,role,nameSeller}))

       }else{
        alert("no doc is there")
       }

    
    })
})