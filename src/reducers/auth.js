function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}
console.log(getCookie('token'));
export default (state = {
    token: getCookie('token'),
}, action) => {
    switch(action.type){
        case 'LOGIN':
            return  {
                token: action.token
            }
        case 'LOGOUT':
            return {};
        default:
            return state;        
    }
};
