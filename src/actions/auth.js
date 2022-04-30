const setCookie = (cName, cValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + ";";
}






export const login = (token) => ({
    type: 'LOGIN',
    token
});

export const startLogin = ({username = '', password = ''}) => {
    return (dispatch, getState) => {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username , password}),
            }
            return  fetch("http://localhost:5000/admin/login", requestOptions).
                then((response) => response.json()).then((data) => {
                    if(data.error){
                        return data
                    }
                    dispatch(login(data.token));
                    setCookie('token', data.token, 10);
                }).catch((e) => {
                     throw e;
                 });
        }catch(e){
            console.log(e);
        }
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogOut = () => {
    return (dispatch, getState) => {
        const token  = getState().auth.token;
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({ token }),
        }
        fetch("http://localhost:5000/admin/logout",requestOptions).
            then(res => {
                console.log(res);
                dispatch(logout());
                setCookie('token','', 50);
            }).catch(e=>{
                console.log(e);
            });
    }
}