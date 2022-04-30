import {v4 as uuid} from 'uuid';
 // ADD USER
export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser =  (userData = {}) => {
    return  (dispatch, getState) => {
        const {
            name = '',
            nid = '',
            startDate = 0,
            endDate = 0,
            program = '',
            description = '',
            gender = 'm',
            hours = 0,


        } = userData;
        const user = {name, nid, startDate, endDate, program, description, gender, hours, id: uuid()}
        try{
            console.log(user);
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDU0IiwiaWF0IjoxNjUxMDYyODkzfQ.NP2co5pIllaxi8dv4ZGC6L9XqgWBnQ_tCZRxC5ot-Tk'
                },
                body: JSON.stringify(user),
            }
            return  fetch("http://localhost:5000/user", requestOptions).
                then((response) => { 
                    console.log(response);
                    dispatch(addUser(user));
                 }).catch((e) => {
                     throw e;
                 });
            
        }catch(e){
            console.log(e);
        }
        
    };
    
};

// Remove User
export const removeUser = ({ id } = {}) => ({
    type: 'REMOVE_USER',
    id
});

export const startRemoveUser =  (id) => {
    return (dispatch, getState) => {
        try{
            const requestOptions = {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDU0IiwiaWF0IjoxNjUxMDYyODkzfQ.NP2co5pIllaxi8dv4ZGC6L9XqgWBnQ_tCZRxC5ot-Tk'
                },
            };
            return fetch(`http://localhost:5000/users/${id}`, requestOptions).
            then((res) => {
                console.log(res);
                dispatch(removeUser({id}));
            }).catch(e => {
                console.log(e);
            });
        }catch(e){

        }
    }
}


// Edit User
export const editUser = (id, updatedUser) => ({
    type: 'EDIT_USER',
    id,
    updatedUser
});

export const startEditUser = (id, updatedUser) => {
    return (dispatch, getState) => {
        try{
            const requestOptions = {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDU0IiwiaWF0IjoxNjUxMDYyODkzfQ.NP2co5pIllaxi8dv4ZGC6L9XqgWBnQ_tCZRxC5ot-Tk'
                },
                body: JSON.stringify(updatedUser),
            }
            return fetch(`http://localhost:5000/users/${id}`, requestOptions).
            then((res) => {
                console.log(res);
                dispatch(editUser(id,updatedUser));
            }).catch((e) => {
                console.log(e);
            })

        }catch(e) {
            console.log(e);
        }
    }
} 


//Set Users
export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetUsers = () => {
    return async (dispatch, getState) => {
        try{
            const token = getState().auth.token;
            if(!token) return;
            const requestOptions = {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
            return await fetch("http://localhost:5000/users", requestOptions).
                then((response) => { 
                    return response.json();
                 }).then((data) => {
                     console.log(data);
                     dispatch(setUsers(data));
                 })
                 .catch((e) => {
                     throw e;
                 });
        }catch(e){
            console.log(e)
        }
    }
}
