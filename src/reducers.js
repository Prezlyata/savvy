import { combineReducers } from 'redux';

import partnersReducer from './components/Partners/reducer';

const allReducers = combineReducers({
	partnersReducer: partnersReducer
});

export default allReducers;