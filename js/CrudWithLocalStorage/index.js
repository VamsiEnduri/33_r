const btn=document.querySelector("button");
const inputTag=document.getElementById("task");
const tasksContainer=document.getElementById("tasksContainer")
btn.addEventListener("click",()=>{
        let inputTagText=inputTag.value.trim();

        if(inputTagText === ""){
            return alert("enter something in the taskbar")
        }
        // console.log(inputTagText)
        let divTag=document.createElement("div");
        divTag.innerHTML=`
        <span>${inputTagText}</span>
        <button>edit</button>
        <button id="dlteBtn">delete</button>
        `
        tasksContainer.append(divTag)


        const dletBtn=divTag.querySelector("#dlteBtn")
        dletBtn.addEventListener("click",()=>{
           const confirmation= confirm("are you sure to dlete?") //false
           if(confirmation){
            divTag.remove()
            alert("ietm dleted successfullyy!!! ")
           }
        })

})


// data persist (storage)
// load :-- stoarge ==> data -> dispaly 