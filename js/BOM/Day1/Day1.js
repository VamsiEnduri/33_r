
const alertBtn=document.getElementById("alert")
const promptBtn=document.getElementById("prompt")
const confirmBtn=document.getElementById("confirm")
const swiggy=document.getElementById("swiggy")
const printBtn=document.getElementById("print");

printBtn.addEventListener("click",()=>{
    window.print()
})


swiggy.addEventListener("mouseover",()=>{
    // window.location.href="https://www.swiggy.com"
    window.open("https://www.swiggy.com","_self")
})

alertBtn.addEventListener("click",()=>{
    window.alert("devar2 is there said by NTR")
})

promptBtn.addEventListener("click",()=>{
    window.prompt("ntrneel31 movie name cheppu:-- ")
    window.alert("wowwww crct ga cheppav!!")
})

confirmBtn.addEventListener("click",()=>{
    window.confirm("are you sure about that moviue name")
})