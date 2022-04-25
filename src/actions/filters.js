export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const searchByID = () => ({
    type:'SEARCH_BY_ID'
});

export const searchByProgram = () => ({
    type:'SEARCH_BY_PROGRAM'
});

export const searchByName = () => ({
    type:'SEARCH_BY_NAME'
});