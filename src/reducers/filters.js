

const filterReducersDefaultState = {
    text: '',
    searchBy: 'id',
    numAppears: 50,
};

const filtersReducers = (state = filterReducersDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SEARCH_BY_ID':
            return {
                ...state,
                searchBy: 'id'
            };
        case 'SEARCH_BY_NAME':
            return {
                  ...state,
                   searchBy: 'name'
            };
        case 'SEARCH_BY_PROGRAM':
            return {
                ...state,
                searchBy: 'program'
            };
        case 'SET_NUMBER_APPEARS':
            return {
                state,
                numAppears: action.numAppears
            }
        default:
            return state;            
    }
}

export default filtersReducers;