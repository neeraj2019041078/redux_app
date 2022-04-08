import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const ehnahcers=[applyMiddleware(thunk)];
const store=createStore(rootReducer,compose(...ehnahcers));

export default store;
