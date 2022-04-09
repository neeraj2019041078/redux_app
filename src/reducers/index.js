import {combineReducers} from 'redux';
import {getUsers,getCurUser} from './userReducer';

const rootReducer=combineReducers({getUsers,getCurUser});

export default rootReducer;