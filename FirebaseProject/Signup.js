import {authentication,db} from "./fbConfig.js"
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
import {setDoc,doc} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js"
document.addEventListener("DOMContentLoaded",()=>{
    let signupForm=document.getElementById("signupForm")

    signupForm.addEventListener("submit",async(e)=>{
        e.preventDefault()
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let role=document.getElementById("role").value;

    const userCredential=  await  createUserWithEmailAndPassword(authentication,email,password)
    console.log(userCredential)


    await setDoc(doc(db,`${role}s`,name),{
        name,
        email,
        role
    }) // user data store purpose doc ni create chestadi

    console.log(userCredential,"user created")
    alert(`${role }created successfully`)
    
    location.href="./Login.html"
    })
})