import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { confirmReducer } from '../../common/mui/confirm-dialog';

export const rootReducer = combineReducers({
	routing: routerReducer,
	confirm: confirmReducer,
});

