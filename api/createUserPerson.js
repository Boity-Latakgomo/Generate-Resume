import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'
const token=getToken(token_Key);
function createPerson(personDetails){
    console.log('getting data')
      var requestOptions = {
        method: 'POST',
      //   headers: {
      //     'Authorization':`Bearer ${token}`,
      //     'Accept': 'application/json, text/plain',
      //     'Content-Type': 'application/json;charset=UTF-8'
      // },
        body: personDetails
      };
      fetch("http://localhost:21021/api/services/app/Person/CreatePerson", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('UserInfo', JSON.stringify(result))
        })
        .catch(error => alert('error', error));
        console.log('end of create person')
}
export{createPerson}