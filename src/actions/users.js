import uuid from 'uuid';

export const addUser = (
    {
        name = "",
        description = "",
        nid = "",
        program = "",
        hours = 0,
        gender = "m",
        startDate=0,
        endDate=0

}) => ({
    type: 'ADD_USER',
    user: {
        id: uuid(),
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

export const removeUser = ({ id } = {}) => ({
    type: 'REMOVE_USER',
    id
});

export const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id
});