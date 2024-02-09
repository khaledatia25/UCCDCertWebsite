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

export const setNumberAppears = (num) => ({
    type: 'SET_NUMBER_APPEARS',
    numAppears: num
});