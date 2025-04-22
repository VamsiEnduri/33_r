let addTaskBtn=document.getElementById("addTaskBtn")

let taskInput=document.getElementById("taskInput")
console.log(taskInput)

let allTasksContainer=document.getElementById("allTasksContainer")


let AllTasks=JSON.parse(localStorage.getItem("myAllTasks"))||[];

addTaskBtn.addEventListener("click",()=>{
const taskInputValue=taskInput.value.trim()
console.log(taskInputValue)
if(taskInputValue === ""){
 return   alert("pls enter some task to add")
}




AllTasks.push(taskInputValue)

localStorage.setItem("myAllTasks",JSON.stringify(AllTasks))

taskInput.value=""

showTasks(AllTasks)





})


function showTasks(AllTasks){


    allTasksContainer.innerHTML=""


    AllTasks.forEach((task,index)=>{
    // console.log(`${task} ${index}`)
    let taskDiv=document.createElement("div")

    taskDiv.innerHTML=`
    <span>${task}</span>
    <button id="edit">edit</button>
    <button id="delete">delete</button>
    `

    const dlteBtn=taskDiv.querySelector("#delete")
    dlteBtn.addEventListener("click",()=>{
        deleteTask(index,AllTasks)
    })


    const editBtn=taskDiv.querySelector("#edit")
    editBtn.addEventListener("click",()=>{
        editTask(index,AllTasks)
    })

    allTasksContainer.append(taskDiv)
})

}


function deleteTask(index){
    // console.log(data)
    const allDataTaks=JSON.parse(localStorage.getItem("myAllTasks"))
//  alert("dlete btn clicked !!!")
const dletConfirm=confirm("are you sure to dlete !!!")
if(dletConfirm){
    allDataTaks.splice(index,1)
    console.log(allDataTaks)
    localStorage.setItem("myAllTasks",JSON.stringify(allDataTaks))
    showTasks(allDataTaks)
}
}


function editTask(index,data){
 
    const currentTask=prompt("edit the task",data[index])

    if(currentTask !== null && currentTask.trim() !==""){
        data[index]=currentTask.trim()
        localStorage.setItem("myAllTasks",JSON.stringify(data))
        showTasks(data)
    }

}




window.addEventListener("DOMContentLoaded",()=>{
    showTasks(AllTasks)
})


// redis :-- cache memeory


