import { getToken, setToken } from "./../utils/util.js";
import {token_key} from './../appConstants/constants.js'

// const token = getToken(token_key);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjRjMGUwZmUzLWM0YzMtYzNmZS04ZTQ0LTNhMDljNTNhYWUyYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6IjVkNDRjOGY1LTg2MDAtNGFkZi1hZGRjLWI4ODRkOWIzYzMyMSIsImlhdCI6MTY3ODE1MjY3MiwibmJmIjoxNjc4MTUyNjcyLCJleHAiOjE2NzgyMzkwNzIsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.-YRk8TkVRzxnTza36cL_1gY-kDvJccsGW1WxRp4EjDU";

let successAlertPopupContainer = document.getElementById("successAlertPopupContainer");
let successPressableText = document.getElementById("successPressableText");
let SuccessText = document.getElementById("SuccessText");

let isSignIn = false;

successPressableText.onclick = () => {
  successAlertPopupContainer.style.display = "none";
  if(isSignIn){
    window.location.replace("http://127.0.0.1:5501/Pages/resume.html");
  }else{
  window.location.replace("http://127.0.0.1:5501/Pages/authentication.html");
  }
}
// async function createUser(userDetails){
// const formData = new FormData();
// formData.append('Title', 1);
// formData.append('DateOfBirth', "2001-02-02");
// formData.append('Name')
// formData.append('Gender', 1);
// formData.append('Race', 1);
// formData.append('IdentificationNumber', "0101012222344");
// formData.append('CellNumber', "0711111111");
// formData.append('Address', "Pretoria, Centurion");
// formData.append('UserId', 3);

//   fetch('http://localhost:21021/api/services/app/Person/CreatePerson', {
//     method: "POST",
//     body: formData
//   })
//   .then(response =>  response.json()
//   ).then(data => 
//     {
//       console.log(data.result)
//       localStorage.setItem("UserInfo", JSON.stringify(data.result))
//       window.location.replace("http://127.0.0.1:5501/Pages/resume.html");
//     }
//   ).catch(error => {
//     console.error(error);
//   });
// }

async function createUser(userDetails){
  console.log('Posting Data',userDetails)
    var requestOptions = {
      method: 'POST',
      headers: {
        'Authorization':`Bearer ${token}`,
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
         'mode':"no-cors"
    },
      body: JSON.stringify(userDetails)
    };
    
    await fetch("http://localhost:21021/api/services/app/User/Create", requestOptions)
      .then(response => response.json())
      .then(data => {
           console.log('result',data.result)
           if(data.result){
            isSignIn = false;
            localStorage.setItem('UserInfo', JSON.stringify(data.result));
            SuccessText.textContent = "User created. Please login";
            successAlertPopupContainer.style.display = "block";
           }else{
            if(data.error.message)
              alert(data.error.message);
            else
              alert("Something went worng!");
           }
      })
      .catch(error => alert('error', error));
      console.log('end of create user')
}

async function signInUser(userDetails){
  console.log('login with Data',userDetails)
  var requestOptions = {
    method: 'POST',
    headers: {
      'Authorization':`Bearer ${token}`,
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
       'mode':"no-cors"
  },
    body: JSON.stringify(userDetails)
  };
  
  await fetch("http://localhost:21021/api/TokenAuth/Authenticate", requestOptions)
    .then(response => response.json())
    .then(data => {
         console.log('Token is ',data.result.accessToken)
         if(data.result.accessToken){
          isSignIn = true;
          localStorage.setItem('AccessToken', JSON.stringify(data.result.accessToken));
          SuccessText.textContent = "You have logged in";
          successAlertPopupContainer.style.display = "block";
         }else{
          if(data.error.message)
            alert(data.error.message);
          else
            alert("Something went worng!");
         }
    })
    .catch(error => alert('error', error));
    console.log('end of login user')
}

export {createUser, signInUser}