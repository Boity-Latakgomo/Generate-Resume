import { createUser, signInUser } from "../api/createUserSignUp.js";

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let surnameField = document.getElementById("surnameField");
let usernameField = document.getElementById("usernameField");
let title = document.getElementById("title");

// alertpopup
let alertPopupContainer = document.getElementById("alertPopupContainer");
let pressableText = document.getElementById("pressableText");

console.log("signUp", signinBtn);
let isSignIn = false;

// on clicks

pressableText.onclick = () => {
  alertPopupContainer.style.display = "none";
};

signinBtn.onclick = (e) => {
  e.preventDefault();
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (isSignIn) {
    // submit sign in
    if (emailInput.value === "" || passwordInput.value === "") {
      alertPopupContainer.style.display = "block";
      return;
    }

    console.log("To login")
    localSignIn();
    /* let signUpData={
                userNameOrEmailAddress: document.querySelector("#emailInput").value,
                password: document.querySelector("#passwordInput").value,
                rememberClient: true,
            }
            signInUser(signUpData) */
  } else {
    nameField.style.maxHeight = "0";
    localStorage.removeItem("ABOUT");
    surnameField.style.maxHeight = "0";
    usernameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    isSignIn = true;
    console.log("animate::: ", isSignIn);
  }
};

signupBtn.onclick = () => {
  const audio = new Audio("../audio/buttonClick.wav");
  audio.play();
  if (!isSignIn) {
    // submit sign up
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      passwordInput.value === ""
    ) {
      alertPopupContainer.style.display = "block";
      return;
    }
    /* let signUpData = {
      userName: document.querySelector("#usernameInput").value,
      name: document.querySelector("#nameInput").value,
      surname: document.querySelector("#surnameInput").value,
      emailAddress: document.querySelector("#emailInput").value,
      isActive: true,
      password: document.querySelector("#passwordInput").value,
    };
    createUser(signUpData); */
    localSignUp();
  } else {
    nameField.style.maxHeight = "65px";
    surnameField.style.maxHeight = "65px";
    usernameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    isSignIn = false;
    console.log("animate::: ", isSignIn);
  }
};

let successAlertPopupContainer = document.getElementById(
  "successAlertPopupContainer"
);
let successPressableText = document.getElementById("successPressableText");
let SuccessText = document.getElementById("SuccessText");

let isSignInPopUp = false;

successPressableText.onclick = () => {
  successAlertPopupContainer.style.display = "none";
  if (isSignInPopUp) {
    window.location.replace("http://127.0.0.1:5503/Pages/resume.html");
  } else {
    window.location.replace("http://127.0.0.1:5503/Pages/authentication.html");
  }
};

// REGISTER
function localSignUp() {
  let signUpData = {
    userName: document.querySelector("#usernameInput").value,
    name: document.querySelector("#nameInput").value,
    surname: document.querySelector("#surnameInput").value,
    emailAddress: document.querySelector("#emailInput").value.toLowerCase(),
    isActive: true,
    password: document.querySelector("#passwordInput").value,
  };

  console.log("DATA PUSHED: ", signUpData);

  let usersInfo;
  const usersInfostring = localStorage.getItem("USERS");

  if (usersInfostring) {
    usersInfo = JSON.parse(usersInfostring);
    // Check if the email entered already exist
    let emailExists = false;
    usersInfo.forEach((user) => {
      if (user.emailAddress === signUpData.emailAddress) {
        alert("Email address already exists!");
        emailExists = true;
        return;
      }
    });
    if (emailExists) {
      console.log("Email exists");
      return;
    }
  } else {
    usersInfo = [];
  }

  isSignInPopUp = false;
  SuccessText.textContent = "User created. Please login";
  localStorage.removeItem("PERSON");
  successAlertPopupContainer.style.display = "block";

  usersInfo.push(signUpData);

  console.log("usersInfo", usersInfo);

  localStorage.setItem("USERS", JSON.stringify(usersInfo));
}

// LOGIN
function localSignIn() {
  let signInData = {
    emailAddress: document.querySelector("#emailInput").value.toLowerCase(),
    password: document.querySelector("#passwordInput").value,
  };

  const usersInfostring = localStorage.getItem("USERS");

  console.log("DATA PUSHED: ", signInData);
  console.log("LOG::: users: ", usersInfostring);

  const usersInfo = JSON.parse(usersInfostring);

  let count = 0;
  let userFound = false;
  usersInfo.forEach((user) => {
    console.log("LOG::: Iteration: ", ++count);
    if (
      user.emailAddress === signInData.emailAddress &&
      user.password === signInData.password
    ) {
      userFound = true;
      isSignInPopUp = true;
      localStorage.setItem("USER_EMAIL", signInData.emailAddress);
      SuccessText.textContent = "You have logged in";
      successAlertPopupContainer.style.display = "block";
      return;
    }
  });

  if (!userFound) {
    alert("Incorrect email or password");
  }
}
