import { createPerson } from '../apis/about.js'
import { createResume } from '../apis/createResume.js'
import { token_key } from '../appConstants/index.js'
import { setToken } from '../utilities.js'
let title = document.getElementById('title');
// let fname = document.getElementById('fname');
// let lname = document.getElementById('surname');
let IDnumber = document.getElementById('idNumberInput');
let gender = document.getElementById('genderInput')
//let bday = document.getElementById('bday');
//let race = document.getElementById('race');
let email = document.getElementById('emailInput');
// let bio = document.getElementById('about');
let phoneNumber = document.getElementById('phoneNumberInput');
let Address = document.getElementById('addressInput');
let popupCancelButton = document.getElementById('profileCancelButton');
let popupSaveButton = document.getElementById('profileSaveButton');
let personForm = document.getElementById('personForm');
const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
 const userId = userInfo.result.userId;
//console.log("tester2",userInfo.result.userId);
setToken(token_key, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImM4MzE5MmMwLTNlYTUtOWY3YS03NDIyLTNhMDlhNTM0NjY4OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6IjkwNWQ0M2ZlLWEyNzctNGE0NC04YTQwLTgyZjcwNjc0MDhiMSIsImlhdCI6MTY3Nzk0MzEzOSwibmJmIjoxNjc3OTQzMTM5LCJleHAiOjE2NzgwMjk1MzksImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.ESKwNCrJt4yLngKpZTz1MHPp0-P654FvbemHjbGZLI0");
if (personForm) {
    personForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // console.log("personForm", personForm)
        // console.log("bday==============", bday.value)
        let radioVal;
        const radios = document.querySelectorAll('input[name="gender"]');
        radios.forEach(radio => {
            radio.addEventListener('click', function () {
                radioVal = radio.value;
            });
        });
        //console.log("testing brandy",userInfo.result)
        // prevent form submission
        // const data = new FormData()
        // data.append('title', 1)
        // data.append('dateOfBirth', bday.value)
        // data.append('gender', 1)
        // data.append('race', 1)
        // data.append('identificationNumber', "1234567890123")
        // data.append('cellNumber', cellphone.value)
        // data.append('address', address.value)
        // data.append('userId', userInfo.result.userId)
        // data.append('file', document.querySelector("#profile-pic").files[0])
        const persondata = {
            title: 1,
            dateOfBirth: bday.value,
            gender: gender2.value,
            race: 1,
            identificationNumber: "1234567890123",
            cellNumber: cellphone.value,
            address: address.value,
            UserId: userInfo.result.userId,
        }
        console.log("data ::", data)
        createPerson(data)
        const userInfoX = JSON.parse(localStorage.getItem('PersonInfo'));
        const personId = userInfoX.result.id;
        console.log("Brandy",userInfoX)
        let resumeNew = {
            name : 'my resume',
            personId: personId
        }
        console.log('creating resume')
        createResume(resumeNew)
        console.log(' resume created')
        // const a = JSON.parse(localStorage.getItem('resumeObj'));
        // const  sectionInfo= a.result.id;
        // let newSection ={
        //     title: 1,
        //     sectionId: sectionInfo
        // }
        // console.log('creating resume')
        //  createSection(newSection)
    })
}