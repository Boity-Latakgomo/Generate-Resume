import { fetchUser } from "../api/fetchUser.js";
const usersInfo = JSON.parse(localStorage.getItem('object'));
function writingUserAdd(){
    fetchUser(21);
    return usersInfo.result.address;
}
function writingUserPhone(){
    fetchUser(21);
    return usersInfo.result.cellNumber;
}
  /*fill in the location textfield */
const h4Location = document.querySelector(".locationFill");
h4Location.innerHTML=writingUserAdd();
  /*fill in the cellno textfield */
const h4Cellnumber = document.querySelector(".phoneFill");
h4Cellnumber.innerHTML=writingUserPhone();