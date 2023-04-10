import{getToken} from "../utils/util.js"
import { token_Key } from "../appConstants/constants.js"
const token = getToken(token_Key);

async function fetchUser(Id){
  console.log('fetching user')
    var requestOptions = {
      method: 'GET',
      headers: {
        'Authorization':`Bearer ${token}`,
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
    }
    };
    await fetch(`http://localhost:21021/api/services/app/User/Get?Id=${Id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result)
      })
      .catch(error => alert('error', error));
      console.log('end of create user')
}
export {fetchUser}