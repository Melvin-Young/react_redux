import { combineReducers } from 'redux';
import courses from './courseReducers';
import authors from './authorReducers';
import apiCallsInProgress from './apiCallReducers';

const rootReducer = combineReducers({
	courses,
	authors,
	apiCallsInProgress,
});

export default rootReducer;
