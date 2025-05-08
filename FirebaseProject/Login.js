import { authentication } from "./fbConfig.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
document.addEventListener("DOMContentLoaded",()=>{
    let loginform=document.getElementById("loginForm");

    loginform.addEventListener("submit",async(e)=>{
        e.preventDefault()
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let role=document.getElementById("role").value;

       const userSignedIn= await signInWithEmailAndPassword(authentication, email, password)

       console.log(userSignedIn,"usersigned")
       alert(`${role} is loggedin`)
       location.href="./DashBoard.html"
    })
})