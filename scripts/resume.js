//const userInfostring = localStorage.getItem("UserInfo");
// console.log("retrieving info: ",userInfo);
//const userInfo = JSON.parse(userInfostring);

// console.log("identificationNumber: ", userInfo.titleText)

/* const userInfostring = localStorage.getItem('UserInfo');
const b = localStorage.getItem('AccessToken');
console.log("LOG::: ", userInfostring)
console.log("LOG::: ", b)

const userInfo = JSON.parse(userInfostring);

// profile refs
let names = document.getElementById("names");
let ProfileGender = document.getElementById("ProfileGender");
// let dateOfBirth = document.getElementById("dateOfBirth");
// let race = document.getElementById("race");
let idNumber = document.getElementById("idNumber");
let cellphoneNo = document.getElementById("cellphoneNo");
let addressText = document.getElementById("addressText");

names.textContent = `${userInfo.surname} ${userInfo.name}`; */
// ProfileGender.textContent = userInfo.genderText;
// dateOfBirth.textContent = userInfo.dateOfBirth.replace("T00:00:00", "");
// identificationNo.textContent = userInfo.identificationNumber;
// cellphoneNo.textContent = userInfo.cellNumber;
// addressText.textContent = userInfo.address;

// profile refs
let names = document.getElementById("names");

let userEmail = localStorage.getItem("USER_EMAIL");
if (userEmail) {
  console.log(userEmail);
  const usersInfoString = localStorage.getItem("USERS");

  if (usersInfoString) {
    const usersInfo = JSON.parse(usersInfoString);
    usersInfo.forEach((user) => {
      if (user.emailAddress === userEmail) {
        names.textContent = `${user.surname} ${user.name}`;
      }
    });
  }

  // if (userEmail) {
  //   names.textContent = `${userInfo.surname} ${userInfo.name}`;
  // }
}
fillPerson();

function fillPerson() {
  const personInfoString = localStorage.getItem("PERSON");
  if (personInfoString) {
    const personInfo = JSON.parse(personInfoString);
    console.log(personInfo);
    document.getElementById("cellphoneNo").textContent = personInfo.phoneNumber;
    document.getElementById("ProfileGender").textContent = personInfo.gender;
    document.getElementById("dateOfBirth").textContent = personInfo.dateOfBirth;
    document.getElementById("identificationNo").textContent =
      personInfo.idNumber;
    document.getElementById("addressText").textContent = personInfo.address;
  }
}

// About
const aboutTextValue = document.getElementById("aboutTextValue");
const aboutTextPlaceholder = document.getElementById("aboutTextPlaceholder");
const aboutInput = document.getElementById("aboutInput");
const AboutPencil = document.getElementById("AboutPencil");
const saveAbout = document.getElementById("saveAbout");

function setAbout(){
   let aboutObj = localStorage.getItem("ABOUT");
   console.log("VALUE::: ", aboutObj)
   let aboutText = '';
   if(aboutObj){
    aboutText = JSON.parse(aboutObj).about
   }

if(aboutText !== ''){
  aboutTextValue.style.display = 'block'
  aboutTextPlaceholder.style.display = 'none'
  aboutInput.style.display = 'none'
  aboutTextValue.textContent = aboutText;
}else{
  aboutTextValue.style.display = 'none'
  aboutTextPlaceholder.style.display = 'block'
  aboutInput.style.display = 'none'
}
}
setAbout();


AboutPencil.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  aboutInput.style.display = 'block'
  aboutTextValue.style.display = 'none'
  aboutTextPlaceholder.style.display = 'none'
  saveAbout.style.display = 'block'
  AboutPencil.style.display = 'none'
  aboutInput.value = aboutTextValue.textContent;
}

saveAbout.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  saveAbout.style.display = 'none'
  AboutPencil.style.display = 'block'
  if(aboutInput.value !== ''){
    if(userEmail){
      let person ={
        emailAddress: userEmail,
        about: aboutInput.value
      }
      localStorage.setItem("ABOUT", JSON.stringify(person))
    }
  }else{if(userEmail){
    let person ={
      emailAddress: userEmail,
      about: ''
    }
    localStorage.setItem("ABOUT", JSON.stringify(person))
  }
  }
  setAbout();
}

// pop-up save button refs
let profileSaveButton = document.getElementById("profileSaveButton");
let educationSaveButton = document.getElementById("educationSaveButton");
let workExperienceSaveButton = document.getElementById(
  "workExperienceSaveButton"
);
let certificationSaveButton = document.getElementById(
  "certificationSaveButton"
);
let skillSaveButton = document.getElementById("skillSaveButton");
let projectSaveButton = document.getElementById("projectSaveButton");

// pop-up cancel button refs
let profileCancelButton = document.getElementById("profileCancelButton");
let educationCancelButton = document.getElementById("educationCancelButton");
let workExperienceCancelButton = document.getElementById(
  "workExperienceCancelButton"
);
let certificationCancelButton = document.getElementById(
  "certificationCancelButton"
);
let skillCancelButton = document.getElementById("skillCancelButton");
let projectCancelButton = document.getElementById("projectCancelButton");

// add button refs
let addEducation = document.getElementById("addEducation");
let addWorkExperience = document.getElementById("addWorkExperience");
let addCertification = document.getElementById("addCertification");
let addSkill = document.getElementById("addSkill");
let addProject = document.getElementById("addProject");

// edit button ref
let infoPencil = document.getElementById("infoPencil");

// pop-up refs
let educationPopUp = document.getElementById("educationPopUp");
let profilePopUp = document.getElementById("profilePopUp");
let experiencePopUp = document.getElementById("experiencePopUp");
let certificationPopUp = document.getElementById("certificationPopUp");
let skillPopUp = document.getElementById("skillPopUp");
let projectPopUp = document.getElementById("projectPopUp");

// list refs
let educationList = document.getElementById("educationList");
let workExperienceList = document.getElementById("workExperienceList");
let certificationList = document.getElementById("certificationList");
let skillList = document.getElementById("skillList");
let projectList = document.getElementById("projectList");

// pop-up input refs
// education
let institutionInput = document.getElementById("institutionInput");
let qualificationInput = document.getElementById("qualificationInput");
let graduationDate = document.getElementById("graduationDate");

// work experience
let jobTitleInput = document.getElementById("jobTitleInput");
let companyNameInput = document.getElementById("companyNameInput");
let companyAddressInput = document.getElementById("companyAddressInput");
let workStartDateInput = document.getElementById("workStartDateInput");
let workEndDateInput = document.getElementById("workEndDateInput");

// Certification
let certificationNameInput = document.getElementById("certificationNameInput");
let issuedOrganisationInput = document.getElementById(
  "issuedOrganisationInput"
);
let certificationDateInput = document.getElementById("certificationDateInput");

// skill
let skillNameInput = document.getElementById("skillNameInput");
let proficiencyLevelInput = document.getElementById("proficiencyLevelInput");

// Project
let projectNameInput = document.getElementById("projectNameInput");
let repoContainerInput = document.getElementById("repoContainerInput");
let repoLinkInput = document.getElementById("repoLinkInput");
let completedOnInput = document.getElementById("completedOnInput");

// other refs
let educationPlaceholderText = document.getElementById(
  "educationPlaceholderText"
);
let workExperiencePlaceholderText = document.getElementById(
  "workExperiencePlaceholderText"
);
let certificationPlaceholderText = document.getElementById(
  "certificationPlaceholderText"
);
let skillsPlaceholderText = document.getElementById("skillsPlaceholderText");
let projectsPlaceholderText = document.getElementById(
  "projectsPlaceholderText"
);
let camera = document.getElementById("camera");
let image = document.getElementById("image");


// on clicks
// camera
camera.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      // const image = new Image();
      // image.src = event.target.result;

      image.setAttribute("src", event.target.result.toString());
      // document.getElementById("image-container").appendChild(image);
    };

    reader.readAsDataURL(file);
  };

  input.click();
};


// Profile
infoPencil.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  profilePopUp.style.display = "block";
};

profileSaveButton.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (userEmail) {
    const phoneNumberInput = document.querySelector("#phoneNumberInput").value;
    const genderInput = document.querySelector("#genderInput").value;
    const dateOfBirthInput = document.querySelector("#dateOfBirthInput").value;
    const idNumberInput = document.querySelector("#idNumberInput").value;
    const addressInput = document.querySelector("#addressInput").value;
    if (
      phoneNumberInput !== "" &&
      genderInput !== "" &&
      dateOfBirthInput !== "" &&
      idNumberInput !== "" &&
      addressInput !== ""
    ) {
      let personData = {
        phoneNumber: phoneNumberInput,
        gender: genderInput,
        dateOfBirth: dateOfBirthInput,
        idNumber: idNumberInput,
        address: addressInput,
        emailAddress: userEmail,
      };

      localStorage.setItem("PERSON", JSON.stringify(personData));

      console.log("SAVED DATA::: ", localStorage.getItem("PERSON"));
      profilePopUp.style.display = "none";
      fillPerson();
    } else {
      alert("Please fill all the fields");
    }
  } else {
    alert("Error! You don't have user email saved");
    profilePopUp.style.display = "none";
  }
};

profileCancelButton.onclick = () => {
  const audio = new Audio("../audio/buttonCancel.wav");
  audio.play();
  profilePopUp.style.display = "none";
};

// Education
let isEditEducation = false;
let educationItemId = "";
addEducation.onclick = () => {
  institutionInput.value = "";
  qualificationInput.value = "";
  graduationDate.value = "";
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  educationPopUp.style.display = "block";
};

let educations = [];

educationSaveButton.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (
    institutionInput.value === "" ||
    qualificationInput.value === "" ||
    graduationDate.value === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  const educationListId = `education_list_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const educationDeleteId = `education_delete_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const educationEditId = `education_edit_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;

  if (isEditEducation) {
    const index = educations.findIndex(
      (item) => item.educationListId === educationItemId
    );
    if (index === -1) {
      alert("Something went wrong");
      return false;
    }

    educations[index].educationListId = educationListId;
    educations[index].educationDeleteId = educationDeleteId;
    educations[index].educationEditId = educationEditId;
    educations[index].schoolName = institutionInput.value;
    educations[index].degree = qualificationInput.value;
    educations[index].graduationDate = graduationDate.value.toString();
  } else {
    educations.push({
      educationListId: educationListId,
      educationDeleteId: educationDeleteId,
      educationEditId: educationEditId,
      schoolName: institutionInput.value,
      degree: qualificationInput.value,
      graduationDate: graduationDate.value.toString(),
    });
  }

  isEditEducation = false;
  educationItemId = "";

  if (educations.length > 0) {
    educationList.innerHTML = ""; // clear <ul>
    educations.forEach((element) => {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", element.educationListId);

      newLi.innerHTML = `
      <div class="educationItem">
          <div class="educationInfoContainer">
              <img src="../images/university.png" class="varsityIcon"/>
              <div class="educationInfo">
                  <h3>${element.schoolName}</h3>
                  <p>${element.degree}</p>
                  <p>${element.graduationDate}</p>
              </div>
          </div>
          <div class="editDelete">
              <img src="../images/pencil.png" class="educationEdit" id="${element.educationEditId}"/>
              <img src="../images/trash.png" class="educationDelete" id="${element.educationDeleteId}"/>
          </div>
      </div>
  `;

      // Append the new li element to the list
      educationList.appendChild(newLi);

      let deleteIcon = document.getElementById(element.educationDeleteId);
      let editIcon = document.getElementById(element.educationEditId);

      console.log(editIcon);

      deleteIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        deleteEducationItem(element.educationListId);
      };

      editIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        editEducationItem(element);
      };
    });
    educationPlaceholderText.style.display = "none";
  }
  educationPopUp.style.display = "none";
};

function deleteEducationItem(listId) {
  console.log("LOG::: elemet to delete ", listId);

  const itemToDelete = document.getElementById(listId);
  educationList.removeChild(itemToDelete);

  educations = educations.filter((e) => e.educationListId !== listId);

  console.log("LOG::: list", educations);
  console.log("LOG::: list", educations.length);
  if (educations.length <= 0) {
    console.log("Hidding");
    educationPlaceholderText.style.display = "block";
    console.log("Hidden");
  }
}

function editEducationItem(education) {
  educationItemId = education.educationListId;
  isEditEducation = true;
  institutionInput.value = education.schoolName;
  qualificationInput.value = education.degree;
  graduationDate.value = education.graduationDate;
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  educationPopUp.style.display = "block";
}

educationCancelButton.onclick = () => {
  const audio = new Audio("../audio/buttonCancel.wav");
  audio.play();
  educationPopUp.style.display = "none";
};

// Work experience
let isEditWorkExperience = false;
let workExperienceItemId = "";

addWorkExperience.onclick = () => {
  jobTitleInput.value = "";
  companyNameInput.value = "";
  companyAddressInput.value = "";
  workStartDateInput.value = "";
  workEndDateInput.value = "";
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  experiencePopUp.style.display = "block";
};

let workExperiences = [];

workExperienceSaveButton.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  console.log(jobTitleInput.value);
  console.log(companyNameInput.value);
  console.log(companyAddressInput.value);
  if (
    jobTitleInput.value === "" ||
    companyNameInput.value === "" ||
    companyAddressInput.value === "" ||
    workStartDateInput.value === "" ||
    workEndDateInput.value === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  const workExperienceListId = `workExperience_list_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const workExperienceDeleteId = `workExperience_delete_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const workExperienceEditId = `workExperience_edit_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;

  if (isEditWorkExperience) {
    const index = workExperiences.findIndex(
      (item) => item.workExperienceListId === workExperienceItemId
    );
    console.log("LOG::: Index ", index);
    if (index === -1) {
      alert("Something went wrong");
      return false;
    }

    workExperiences[index].workExperienceListId = workExperienceListId;
    workExperiences[index].workExperienceDeleteId = workExperienceDeleteId;
    workExperiences[index].jobTitle = jobTitleInput.value;
    workExperiences[index].companyName = companyNameInput.value;
    workExperiences[index].address = companyAddressInput.value;
    workExperiences[index].workStartDate = workStartDateInput.value.toString();
    workExperiences[index].workEndDate = workEndDateInput.value.toString();
  } else {
    workExperiences.push({
      workExperienceListId: workExperienceListId,
      workExperienceDeleteId: workExperienceDeleteId,
      workExperienceEditId: workExperienceEditId,
      jobTitle: jobTitleInput.value,
      companyName: companyNameInput.value,
      address: companyAddressInput.value,
      workStartDate: workStartDateInput.value.toString(),
      workEndDate: workEndDateInput.value.toString(),
    });
  }

  isEditWorkExperience = false;
  workExperienceItemId = "";

  if (workExperiences.length > 0) {
    workExperienceList.innerHTML = "";
    workExperiences.forEach((element) => {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", element.workExperienceListId);

      let imgSrc;
      if (element.companyName.toLowerCase().includes("google")) {
        imgSrc = "../images/google_logo.png";
      } else if (element.companyName.toLowerCase().includes("huawei")) {
        imgSrc = "../images/huawei_logo.png";
      } else {
        imgSrc = "../images/defaultCompany.png";
      }

      newLi.innerHTML = `
      <div class="experienceItem">
        <div class="experienceInfoContainer">
          <img src="${imgSrc}" class="varsityIcon"/>
          <div class="experienceInfo">
              <h3>${element.jobTitle}</h3>
              <p>${element.companyName}</p>
              <p>${element.workStartDate} - ${element.workEndDate}</p>
              <p>${element.address}</p>
          </div>
        </div>
        <div class="editDelete">
          <img src="../images/pencil.png" class="experienceEdit" id="${element.workExperienceEditId}"/>
          <img src="../images/trash.png" class="experienceDelete" id="${element.workExperienceDeleteId}"/>
        </div>
    </div>
    `;

      // Append the new li element to the list
      workExperienceList.appendChild(newLi);

      let deleteIcon = document.getElementById(element.workExperienceDeleteId);
      let editIcon = document.getElementById(element.workExperienceEditId);

      console.log(editIcon);
      deleteIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        deleteWorkExperienceItem(element.workExperienceListId);
      };

      editIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        editWorkExperience(element);
      };
    });
    workExperiencePlaceholderText.style.display = "none";
  }

  experiencePopUp.style.display = "none";
};

workExperienceCancelButton.onclick = () => {
  const audio = new Audio("../audio/buttonCancel.wav");
  audio.play();
  experiencePopUp.style.display = "none";
};

function deleteWorkExperienceItem(listId) {
  console.log("LOG::: elemet to delete ", listId);

  const itemToDelete = document.getElementById(listId);
  workExperienceList.removeChild(itemToDelete);

  workExperiences = workExperiences.filter(
    (e) => e.workExperienceListId !== listId
  );

  if (workExperiences.length <= 0) {
    workExperiencePlaceholderText.style.display = "block";
  }
}

function editWorkExperience(workExperiece) {
  isEditWorkExperience = true;
  workExperienceItemId = workExperiece.workExperienceListId;

  jobTitleInput.value = workExperiece.jobTitle;
  companyNameInput.value = workExperiece.companyName;
  companyAddressInput.value = workExperiece.address;
  workStartDateInput.value = workExperiece.workStartDate;
  workEndDateInput.value = workExperiece.workEndDate;
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  experiencePopUp.style.display = "block";
}

// Certification
let isEditCertification = false;
let certificationItemId = "";

addCertification.onclick = () => {
  certificationNameInput.value = "";
  issuedOrganisationInput.value = "";
  certificationDateInput.value = "";
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  certificationPopUp.style.display = "block";
};

let certifications = [];

certificationSaveButton.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (
    certificationNameInput.value === "" ||
    issuedOrganisationInput.value === "" ||
    certificationDateInput.value === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  const certificationListId = `education_list_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const certificationDeleteId = `education_delete_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const certificationEditId = `education_edit_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;

  if (isEditCertification) {
    const index = certifications.findIndex(
      (item) => item.certificationListId === certificationItemId
    );
    console.log("LOG::: Index ", index);
    if (index === -1) {
      alert("Something went wrong");
      return false;
    }

    certifications[index].certificationListId = certificationListId;
    certifications[index].certificationDeleteId = certificationDeleteId;
    certifications[index].certificationEditId = certificationEditId;
    certifications[index].certificationName = certificationNameInput.value;
    certifications[index].issuedOrganisation = issuedOrganisationInput.value;
    certifications[index].certificationDate =
      certificationDateInput.value.toString();
  } else {
    certifications.push({
      certificationListId: certificationListId,
      certificationDeleteId: certificationDeleteId,
      certificationEditId: certificationEditId,
      certificationName: certificationNameInput.value,
      issuedOrganisation: issuedOrganisationInput.value,
      certificationDate: certificationDateInput.value.toString(),
    });
  }

  isEditCertification = false;
  certificationItemId = "";

  if (certifications.length > 0) {
    certificationList.innerHTML = "";
    certifications.forEach((element) => {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", element.certificationListId);

      let imgSrc;
      if (element.issuedOrganisation.toLowerCase().includes("codecademy")) {
        imgSrc = "../images/codecademy.png";
      } else if (element.issuedOrganisation.toLowerCase().includes("udemy")) {
        imgSrc = "../images/udemy.png";
      } else {
        imgSrc = "../images/defaultCompany.png";
      }

      newLi.innerHTML = `
    <div class="certificationItem">
                        <div class="certificationInfoContainer">
                            <img src="${imgSrc}" class="certificationIcon"/>
                            <div class="certificationInfo">
                                <h3>${element.certificationName}</h3>
                                <p>${element.issuedOrganisation}</p>
                                <p>${element.certificationDate}</p>
                                <a href="#">View Attachment</a>
                            </div>
                        </div>
                        <div class="editDelete">
                            <img src="../images/pencil.png" class="certificationEdit" id="${element.certificationEditId}"/>
                            <img src="../images/trash.png" class="certificationDelete"id="${element.certificationDeleteId}"/>
                        </div>
                    </div>
    `;

      certificationList.appendChild(newLi);

      let deleteIcon = document.getElementById(element.certificationDeleteId);
      let editIcon = document.getElementById(element.certificationEditId);

      console.log(editIcon);

      deleteIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        deleteCertificationItem(element.certificationListId);
      };

      editIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        editCertification(element);
      };
    });
    certificationPlaceholderText.style.display = "none";
  }

  certificationPopUp.style.display = "none";
};

function deleteCertificationItem(listId) {
  console.log("LOG::: elemet to delete ", listId);

  const itemToDelete = document.getElementById(listId);
  certificationList.removeChild(itemToDelete);

  certifications = certifications.filter(
    (e) => e.certificationListId !== listId
  );

  console.log("LOG::: list", certifications);
  console.log("LOG::: list", certifications.length);
  if (certifications.length <= 0) {
    console.log("Hidding");
    certificationPlaceholderText.style.display = "block";
    console.log("Hidden");
  }
}

function editCertification(certification) {
  isEditCertification = true;
  certificationItemId = certification.certificationListId;

  certificationNameInput.value = certification.certificationName;
  issuedOrganisationInput.value = certification.issuedOrganisation;
  certificationDateInput.value = certification.certificationDate;
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  certificationPopUp.style.display = "block";
}

certificationCancelButton.onclick = () => {
  const audio = new Audio("../audio/buttonCancel.wav");
  audio.play();
  certificationPopUp.style.display = "none";
};

// Skill
let isEditSkill = false;
let skillItemId = "";
addSkill.onclick = () => {
  skillNameInput.value = "";
  proficiencyLevelInput.value = "";
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  skillPopUp.style.display = "block";
};

let skills = [];

skillSaveButton.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (skillNameInput.value === "" || proficiencyLevelInput.value === "") {
    alert("Please fill all the fields");
    return;
  }

  const skillListId = `skill_list_${Math.floor((1 + Math.random()) * 0x10000)}`;
  const skillDeleteId = `skill_delete_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const skillEditId = `skill_edit_${Math.floor((1 + Math.random()) * 0x10000)}`;

  if (isEditSkill) {
    const index = skills.findIndex((item) => item.skillListId === skillItemId);
    console.log("LOG::: Index ", index);
    if (index === -1) {
      alert("Something went wrong");
      return false;
    }

    skills[index].skillListId = skillListId;
    skills[index].skillDeleteId = skillDeleteId;
    skills[index].skillEditId = skillEditId;
    skills[index].skillName = skillNameInput.value;
    skills[index].proficiencyLevel = proficiencyLevelInput.value;
  } else {
    skills.push({
      skillListId: skillListId,
      skillDeleteId: skillDeleteId,
      skillEditId: skillEditId,
      skillName: skillNameInput.value,
      proficiencyLevel: proficiencyLevelInput.value,
    });
  }

  isEditSkill = false;
  skillItemId = "";

  if (skills.length > 0) {
    skillList.innerHTML = "";
    skills.forEach((element) => {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", element.skillListId);

      newLi.innerHTML = `
    <div class="skillsItem">
                        <div class="skillsInfoContainer">
                            <div class="skillsInfo">
                                <h3>${element.skillName}</h3>
                                <p>${element.proficiencyLevel}</p>
                            </div>
                        </div>
                        <div class="editDelete">
                            <img src="../images/pencil.png" class="skillsEdit" id="${element.skillEditId}"/>
                            <img src="../images/trash.png" class="skillsDelete" id="${element.skillDeleteId}"/>
                        </div>
                    </div>
    `;

      skillList.appendChild(newLi);

      let deleteIcon = document.getElementById(element.skillDeleteId);
      let editIcon = document.getElementById(element.skillEditId);

      console.log(editIcon);

      deleteIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        deleteSkillItem(element.skillListId);
      };

      editIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        editSkillItem(element);
      };
    });
    skillsPlaceholderText.style.display = "none";
  }

  skillPopUp.style.display = "none";
};

function deleteSkillItem(listId) {
  console.log("LOG::: elemet to delete ", listId);

  const itemToDelete = document.getElementById(listId);
  skillList.removeChild(itemToDelete);

  skills = skills.filter((e) => e.skillListId !== listId);

  console.log("LOG::: list", skills);
  console.log("LOG::: list", skills.length);
  if (skills.length <= 0) {
    console.log("Hidding");
    skillsPlaceholderText.style.display = "block";
    console.log("Hidden");
  }
}

function editSkillItem(skill) {
  isEditSkill = true;
  skillItemId = skill.skillListId;

  skillNameInput.value = skill.skillName;
  proficiencyLevelInput.value = skill.proficiencyLevel;
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  skillPopUp.style.display = "block";
}

skillCancelButton.onclick = () => {
  const audio = new Audio("../audio/buttonCancel.wav");
  audio.play();
  skillPopUp.style.display = "none";
};

// Project
let isEditProject = false;
let projectItemId = "";
addProject.onclick = () => {
  projectNameInput.value = "";
  repoContainerInput.value = "";
  repoLinkInput.value = "";
  completedOnInput.value = "";
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  projectPopUp.style.display = "block";
};

let projects = [];
projectSaveButton.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (
    projectNameInput.value === "" ||
    repoContainerInput.value === "" ||
    repoLinkInput.value === "" ||
    completedOnInput.value === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  const projectListId = `project_list_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const projectDeleteId = `project_delete_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;
  const projectEditId = `project_edit_${Math.floor(
    (1 + Math.random()) * 0x10000
  )}`;

  if (isEditProject) {
    const index = projects.findIndex(
      (item) => item.projectListId === projectItemId
    );
    console.log("LOG::: Index ", index);
    if (index === -1) {
      alert("Something went wrong");
      return false;
    }

    projects[index].projectListId = projectListId;
    projects[index].projectDeleteId = projectDeleteId;
    projects[index].projectEditId = projectEditId;
    projects[index].projectName = projectNameInput.value;
    projects[index].repoContainer = repoContainerInput.value;
    projects[index].repoLink = repoLinkInput.value;
    projects[index].completedOn = completedOnInput.value.toString();
  } else {
    projects.push({
      projectListId: projectListId,
      projectDeleteId: projectDeleteId,
      projectEditId: projectEditId,
      projectName: projectNameInput.value,
      repoContainer: repoContainerInput.value,
      repoLink: repoLinkInput.value,
      completedOn: completedOnInput.value.toString(),
    });
  }

  isEditProject = false;
  projectItemId = "";

  if (projects.length > 0) {
    projectList.innerHTML = "";
    projects.forEach((element) => {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", element.projectListId);

      newLi.innerHTML = `
      <div class="projectItem">
      <div class="projectInfoContainer">
          <img src="../images/project.png" class="certificationIcon"/>
          <div class="certificationInfo">
              <h3>${element.projectName}</h3>
              <p>${element.repoContainer}</p>
              <p>${element.completedOn}</p>
              <a href="${element.repoLink}" target="_blank">View Project</a>
          </div>
      </div>
      <div class="editDelete">
          <img src="../images/pencil.png" class="certificationEdit" id="${element.projectEditId}"/>
          <img src="../images/trash.png" class="certificationDelete" id="${element.projectDeleteId}"/>
      </div>
  </div>
      `;

      projectList.appendChild(newLi);

      let deleteIcon = document.getElementById(element.projectDeleteId);
      let editIcon = document.getElementById(element.projectEditId);

      console.log(editIcon);

      deleteIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        deleteProjectItem(element.projectListId);
      };

      editIcon.onclick = () => {
        const audio = new Audio("../audio/buttonClick.wav");
        audio.play();
        editProjectItem(element);
      };
    });
    projectsPlaceholderText.style.display = "none";
  }

  projectPopUp.style.display = "none";
};

function deleteProjectItem(listId) {
  console.log("LOG::: elemet to delete ", listId);

  const itemToDelete = document.getElementById(listId);
  projectList.removeChild(itemToDelete);

  projects = projects.filter((e) => e.projectListId !== listId);

  console.log("LOG::: list", projects);
  console.log("LOG::: list", projects.length);
  if (projects.length <= 0) {
    console.log("Hidding");
    projectsPlaceholderText.style.display = "block";
    console.log("Hidden");
  }
}

function editProjectItem(project) {
  isEditProject = true;
  projectItemId = project.projectListId;

  projectNameInput.value = project.projectName;
  repoContainerInput.value = project.repoContainer;
  repoLinkInput.value = project.repoLink;
  completedOnInput.value = project.completedOn;
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  projectPopUp.style.display = "block";
}

projectCancelButton.onclick = () => {
  const audio = new Audio("../audio/buttonCancel.wav");
  audio.play();
  projectPopUp.style.display = "none";
};
