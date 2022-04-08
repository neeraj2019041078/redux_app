import {combineReducers} from 'redux';
import {getUsers} from './userReducer';

const rootReducer=combineReducers({getUsers});

export default rootReducer;