let devloperBtn = document.getElementById("devsBtn");
let devlopersTypesBtnContainer = document.getElementById(
  "devlopersTypesBtnContainer"
);

const devs_Url = "http://localhost:5000";
const testing_Url = "http://localhost:5000";

devlopersTypesBtnContainer.style.marginTop = "2rem";
devloperBtn.addEventListener("click", async () => {
  devlopersTypesBtnContainer.innerHTML = `
   <div id="allTypesDevsBtns"> <span class="devTypeBtn" >frontendDevs</span>
    <span class="devTypeBtn">backendDevs</span>
    <span class="devTypeBtn">sqlDevs</span>
    <span class="devTypeBtn">fullstackDevs</span></div>
    <span id="addDevBtn">AddDevloper</span>
    `;

  const addDevBtlClick = document.getElementById("addDevBtn");

  addDevBtlClick.addEventListener("click", () => {
    alert("addDevloperBtn clicked");

    let devModal = document.getElementById("devloperModal");
    console.log(devModal);

    const showModal = new bootstrap.Modal(devModal);
    showModal.show();

    let submitDevFormBtn = document.getElementById("submitDevForm");

    submitDevFormBtn.addEventListener("click", async () => {
      let devFormDetails = document.getElementById("devFormDetails");
      console.log(devFormDetails);

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const role = document.getElementById("role").value;
      const skills = document.getElementById("skills").value.split(",");
      const exp = document.getElementById("experience").value;

      const newDevloper = {
        name,
        email,
        role,
        skills,
        exp,
      };

      let res = await fetch(`${devs_Url}/${role}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDevloper),
      });
      console.log(res);
      console.log(newDevloper);

      showModal.hide();
    });
  });

  const specificCatDevBtn =
    devlopersTypesBtnContainer.querySelectorAll(".devTypeBtn");
  console.log(specificCatDevBtn);

  specificCatDevBtn.forEach((btn) => {
    console.log("btn", btn);
    btn.addEventListener("click", async () => {
      const btnTxt = btn.innerHTML.slice(0, -1);
      console.log(btnTxt);
      const res = await fetch(`${devs_Url}/${btnTxt}`);
      const data = await res.json();
      console.log(data);
      const filteredData = data;
      console.log(filteredData, "fil data");

      let catWiseDevsContainer = document.getElementById(
        "catWiseDevsContainer"
      );
      catWiseDevsContainer.innerHTML = "";
      console.log(catWiseDevsContainer);
      filteredData.forEach((devloper) => {
        console.log(devloper.skills, "skills");

        let skillsContainer = document.createElement("div");
        skillsContainer.id = "skillsContainer";

        devloper.skills.forEach((skill) => {
          let spanSkill = document.createElement("span");
          spanSkill.innerHTML = skill;
          spanSkill.id = "skill";

          skillsContainer.append(spanSkill);
        });

        console.log(skillsContainer, "stred skills");

        let devDiv = document.createElement("div");
        devDiv.id = "devDiv";
        devDiv.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
        <h1>${devloper.name}</h1>

        <i class="fa-solid fa-pen-nib" style="color:blue;"></i>
        <i class="fa-solid fa-trash" style="color:red;"></i>
        </div>
        <p>${devloper.role}</p>
        <p>${devloper.email}</p>
      
        `;
        let dlteBtn = devDiv.querySelector(".fa-trash");
        dlteBtn.addEventListener("click", () => {
          const btnTxt = btn.innerHTML.slice(0, -1);
          deleteDeveloper(devloper.id, btnTxt); // 5000/frontendDev/4
        });

        let editBtn = devDiv.querySelector(".fa-pen-nib");
        editBtn.addEventListener("click", () => {
          alert("yes edit option");
          editDeveloper(devloper);
        });

        devDiv.append(skillsContainer);

        catWiseDevsContainer.append(devDiv);
      });
      console.log(catWiseDevsContainer);
    });
  });
});

async function deleteDeveloper(id, endPoint) {
  try {
    let res = await fetch(`${devs_Url}/${endPoint}/${id}`, {
      method: "DELETE",
    });
    console.log(res);

    if (res.ok) {
      displayDevs();
      alert("successfully dleted!!!");
    } else {
      alert("dletion failed");
    }
  } catch (err) {
    console.log(err);
  }
}

async function editDeveloper(devloper) {
  console.log(devloper);

  document.getElementById("name").value = devloper.name;
  document.getElementById("email").value = devloper.email;
  document.getElementById("role").value = devloper.role;
  document.getElementById("skills").value = devloper.skills;
  document.getElementById("experience").value = devloper.experience;

  const modal = document.getElementById("devloperModal");
  const showModal = new bootstrap.Modal(modal);
  showModal.show();

  const editSubmitBtn = document.getElementById("submitDevForm");

  editSubmitBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    const skills = document.getElementById("skills").value.split(",");
    console.log(skills)
    const exp = document.getElementById("experience").value;

    const Data = {
      name,
      email,
      role,
      skills,
      exp,
    };
    console.log(Data);

    try {
      let res = await fetch(`${devs_Url}/${role}/${devloper.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });
    } catch (err) {
      console.log(err);
    }

    showModal.hide()
    // displayEmployees()
  });
}
