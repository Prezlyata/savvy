import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import partnersReducer from './components/Partners/reducer';

const allReducers = combineReducers({
	partnersReducer: partnersReducer,
	form
});

export default allReducers;
