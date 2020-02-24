import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import partnersReducer from './components/Partners/reducer';
import authReducer from './components/LoginForm/reducer'

const allReducers = combineReducers({
	partnersReducer: partnersReducer,
	authReducer: authReducer,
	form
});

export default allReducers;
