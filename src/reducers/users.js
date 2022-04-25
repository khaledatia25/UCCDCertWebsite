import users from '../data/users';
const userReducersDefaultState = users;

export default (state = userReducersDefaultState, action) =>{
    switch(action.type){
        case 'ADD_USER':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_USER':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_USER':
            return state.map((user)=>{
                if(user.id === action.id){
                    return {
                        ...user,
                        ...action.updates

                    };
                }else{
                    return user;
                }
            }); 
        default:
            return state;           
    }
};