function handleTogglePswd(){
    let inputTag=document.querySelector("#inputTag");
    let icon=document.querySelector("#icon");

    if(inputTag.type === "password"){
        inputTag.type ="text"
        icon.innerText="🙈"
    }else{
        inputTag.type ="password"
        icon.innerText="👁️"

    }
}