let devloperBtn=document.getElementById("devsBtn")
let devlopersTypesBtnContainer=document.getElementById("devlopersTypesBtnContainer")

devlopersTypesBtnContainer.style.marginTop="2rem"
devloperBtn.addEventListener("click",async()=>{

    devlopersTypesBtnContainer.innerHTML=`
    <span class="devTypeBtn" >frontendDevs</span>
    <span class="devTypeBtn">backendDevs</span>
    <span class="devTypeBtn">sqlDevs</span>
    <span class="devTypeBtn">fullstackDevs</span>
    `

   const res=await fetch("http://localhost:3000/developers")
   const data=await res.json()
   console.log(data)

   const specificCatDevBtn=devlopersTypesBtnContainer.querySelectorAll(".devTypeBtn")
   console.log(specificCatDevBtn)
   

   specificCatDevBtn.forEach((btn)=>{
    let catWiseDevsContainer=document.createElement("div");
        catWiseDevsContainer.innerHTML=""
      console.log("btn",btn)
      btn.addEventListener("click",()=>{
        const btnTxt=btn.innerHTML.slice(0,-1);
        console.log(btnTxt)
        const filteredData=data[btnTxt]
        console.log(filteredData)

       
       

        filteredData.forEach((devloper)=>{
         
            let devDiv=document.createElement("div");
        devDiv.innerHTML=`
        <h1>${devloper.name}</h1>
        `
        catWiseDevsContainer.append(devDiv)
        })
         
        document.body.append(catWiseDevsContainer)
        //  catWiseDevsContainer.innerHTML=""
      })
   })

})