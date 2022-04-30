import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import usersReducer from '../reducers/users';
import filtersReducers from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            users: usersReducer,
            filters: filtersReducers,
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );

    return store;
};