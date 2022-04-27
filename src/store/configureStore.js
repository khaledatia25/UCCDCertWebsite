import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/users';
import filtersReducers from '../reducers/filters';
import authReducer from '../reducers/auth';
export default () => {
    const store = createStore(
        combineReducers({
            users: usersReducer,
            filters: filtersReducers,
            auth: authReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};