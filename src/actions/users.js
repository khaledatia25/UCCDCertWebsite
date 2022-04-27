import {v4 as uuid} from 'uuid';
export const addUser = (
    {
        name = "",
        description = "",
        nid = "",
        program = "",
        hours = 0,
        gender = "m",
        startDate=0,
        endDate=0,
        id

}) => ({
    type: 'ADD_USER',
    user: {
        id: id,
        description,
        name,
        nid,
        program,
        hours,
        gender,
        startDate,
        endDate
    }
});

// export const startAddUser = (userData = {}) => {
//     return (dispatch, getState) => {
//         const {
//             name = "",
//             description = "",
//             nid = "",
//             program = "",
//             hours = 0,
//             gender = "m",
//             startDate=0,
//             endDate=0
    
//         } = userData;
//         const user = {name, description, nid, program, hours, gender, startDate, endDate };
//         try{
//             addUserToDb({
//                 id: uuid(),
//                 ...user
//             });
//             dispatch(addUser({
//                 id: uuid(),
//                 ...user
//             }));
//         } catch(e){
//             console.log(e)
//         }
        
//     }
// }

export const removeUser = ({ id } = {}) => ({
    type: 'REMOVE_USER',
    id
});
// export const startRemoveUser = (id) => {
//     return (dispatch) => {
//         try{
//             deleteUserById(id);
//             dispatch(removeUser({id}));
//         }catch(e){
//             console.log(e);
//         }
//     }
// }


export const editUser = (id, updatedUser) => ({
    type: 'EDIT_USER',
    id,
    updatedUser
});

// export const startEditUser = (id, updatedUser) => {
//     return (dispatch, getState) => {
//         try{
//             updateUserById(id, updatedUser);
//             dispatch(editUser(id, updatedUser));
//         }catch(e){
//             console.log(e);
//         }
//     };
// }