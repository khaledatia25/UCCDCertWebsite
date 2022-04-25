
const getVisibleUsers = (users, {text = '', searchBy}) => {
    return users.filter((user) => {
        if(text === ''){
            return user;
        }
        if(searchBy === 'id' ){
            return text === user.nid
        }else if(searchBy === 'name'){
            const textMatch = user.name.toString().toLowerCase().includes(`${text}`.toLowerCase());
            return textMatch;
        }else if(searchBy === 'program'){
            const textMatch = user.program.toString().toLowerCase().includes(`${text}`.toLowerCase());
            return textMatch
        }
    });
}

export default getVisibleUsers;