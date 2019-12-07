import authReducer from './authReducer';
import teamReducer from './teamReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    team: teamReducer
});

export default rootReducer;
