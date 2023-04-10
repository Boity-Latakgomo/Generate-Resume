const url = 'http://localhost:21021/api/services/app/Resume/CreateResume'
 function resume(obj) {
    console.log('create user envoked');
    let requestOpt ={
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(obj)
    }
     fetch(url, requestOpt)
    .then(response => response.json())
    .then(result => {
        localStorage.setItem("objResume", JSON.stringify(result));
    })
    .catch(error => alert('error', error));
    console.log('final line of logging in user');
}
export {resume}