import { createPerson } from "./../table api/createPerson.js";
import { token_Key } from "../../appConstants/constants.js";
import { setToken } from "../../utils/util.js";
//ask if we do this
setToken(token_Key, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijc0MTMyYzhkLTg4MzgtMjQ1YS0wOGJmLTNhMDlhZjY5ZTdlMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6IjE0MTAzODYyLTllNWQtNDk2Mi04ZDI3LTdjMTgxNjE4YjJlNiIsImlhdCI6MTY3Nzg0NTY5NiwibmJmIjoxNjc3ODQ1Njk2LCJleHAiOjE2Nzc5MzIwOTYsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.2XcpxjxKrx1Rk7cXfSa2LXBWB4vFqMkDGwga7GHUMOM");

const submitResume = document.querySelector('#submitpersonBtn');
const userId=16;

submitResume.addEventListener('click', function() {
    console.log('PERSON CREATED')
    let personData={
        title: 1,
        dateOfBirth: "2023-03-02T17:57:59.612Z",
        gender: 0,
        race: 1,
        identificationNumber: "0101125336489",
        cellNumber: "0629527586",
        address: "gELLUKSDAL",
        "userId": userId,
    }
    console.log("values ::","8548974658514874652")
    let OBJ = JSON.parse(localStorage.getItem('UserInfo'))
    console.log(`${OBJ.result.userId}`);
    console.log("values ::",personData)
    createPerson(personData)
 });
 export {userId}

