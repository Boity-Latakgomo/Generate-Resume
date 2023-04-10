function getToken(key){
    return localStorage.getItem(key);
}
function setToken(key, value){
    localStorage.setItem(key, value)
}
export {getToken, setToken};