const userReducersDefaultState = [];

export default (state = userReducersDefaultState, action) =>{
    switch(action.type){
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ];
        case 'REMOVE_USER':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_USERS':
            return action.users;    
        case 'EDIT_USER':
            return state.map((user)=>{
                if(user.id === action.id){
                    return {
                        ...user,
                        ...action.updatedUser

                    };
                }else{
                    return user;
                }
            }); 
        default:
            return state;           
    }
};