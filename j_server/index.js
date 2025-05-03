let devloperBtn=document.getElementById("devsBtn")
let devlopersTypesBtnContainer=document.getElementById("devlopersTypesBtnContainer")

const devs_Url="http://localhost:5000"
const testing_Url="http://localhost:5000"

devlopersTypesBtnContainer.style.marginTop="2rem"
devloperBtn.addEventListener("click",async()=>{

    devlopersTypesBtnContainer.innerHTML=`
    <span class="devTypeBtn" >frontendDevs</span>
    <span class="devTypeBtn">backendDevs</span>
    <span class="devTypeBtn">sqlDevs</span>
    <span class="devTypeBtn">fullstackDevs</span>
    `

  

   const specificCatDevBtn=devlopersTypesBtnContainer.querySelectorAll(".devTypeBtn")
   console.log(specificCatDevBtn)
   

   specificCatDevBtn.forEach((btn)=>{
  
      console.log("btn",btn)
      btn.addEventListener("click",async()=>{
        const btnTxt=btn.innerHTML.slice(0,-1);
        console.log(btnTxt)
        const res=await fetch(`${devs_Url}/${btnTxt}`)
        const data=await res.json()
        console.log(data)
        const filteredData=data
        console.log(filteredData,"fil data" )

        let catWiseDevsContainer=document.getElementById("catWiseDevsContainer")
        catWiseDevsContainer.innerHTML=""
console.log(catWiseDevsContainer)
        filteredData.forEach((devloper)=>{
          console.log(devloper.skills,"skills")

          let skillsContainer=document.createElement("div");
          skillsContainer.id="skillsContainer"

          devloper.skills.forEach((skill)=>{
            let spanSkill=document.createElement("span")
            spanSkill.innerHTML=skill;
            spanSkill.id="skill"

            skillsContainer.append(spanSkill)
          })

          console.log(skillsContainer,"stred skills")


            let devDiv=document.createElement("div");
            devDiv.id="devDiv"
        devDiv.innerHTML=`
        <div style="display:flex;justify-content:space-between;align-items:center">
        <h1>${devloper.name}</h1>
        <i class="fa-solid fa-trash" style="color:red;"></i>
        </div>
        <p>${devloper.role}</p>
        <p>${devloper.email}</p>
      
        `
let dlteBtn=devDiv.querySelector(".fa-trash")
dlteBtn.addEventListener("click",()=>{
        const btnTxt=btn.innerHTML.slice(0,-1);
  deleteDeveloper(devloper.id,btnTxt)  // 5000/frontendDev/4
})

        devDiv.append(skillsContainer)
        
        catWiseDevsContainer.append(devDiv)
        })
        console.log(catWiseDevsContainer)
      })
   })

})


async function deleteDeveloper(id,endPoint){
  try{
    let res=await fetch(`${devs_Url}/${endPoint}/${id}`,{
      method:"DELETE"
     })
     console.log(res)

     if(res.ok){
      displayDevs()
      alert("successfully dleted!!!")
     }else{
      alert("dletion failed")
     }
  }
  catch(err){
    console.log(err)
  }
   
}


