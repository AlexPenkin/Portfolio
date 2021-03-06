import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './reducers/increment';

const rootReducer = combineReducers({
    counter,
    routing
});

export default rootReducer;
