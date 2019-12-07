import authReducer from './authReducer';
import upcomingGamesReducer from './upcomingGamesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    upcomingGame: upcomingGamesReducer
});

export default rootReducer;
