// let div=document.querySelector("div");

// // div.style.backgroundColor="red"
// div.style.width="300px"
// div.style.height="300px"
// div.style.border="2px solid black"

// div.className="divTag"

// div.classList.add("vamsi")
// // div.classList.add("vamsi2")
// // div.classList.add("vamsi3")
// // div.classList.add("vamsi4")



// div.classList.remove("vamsi")


// console.log(div)

// let div=document.querySelector("div");

// function add(){
//     div.innerText="hello there im div"
//     div.classList.add("bgColor")
// }

// function remove(){
//     div.innerText=""
//     div.classList.remove("bgColor")
// }


// bg theme togger

// let btn=document.querySelector("button");
// btn.innerText="dark"
// btn.onclick=function (){
    
//     if(document.body.style.backgroundColor === "white"){
//         document.body.style.backgroundColor="black"
//     document.body.style.color="white"
//     }

//     if( document.body.style.backgroundColor==="black"){
       
//             document.body.style.backgroundColor="white"
//        document.body.style.color="black"
      
//     }
// }


function themeToggler(){
    document.body.classList.toggle("theme")
   
    if(document.body.classList.contains("theme")){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }else{
        document.body.style.color="black"
        document.body.style.backgroundColor="white"
    }
}


console.log(document.body)

// .addEventListener