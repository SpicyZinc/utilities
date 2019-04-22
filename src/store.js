import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleWare, loggerMiddleware)
);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

// import { rootReducer } from './reducers';

// const configureStore = (initialState = {}) => {
// 	const enhancers = [ applyMiddleware(thunk, createLogger()) ];
// 	const store = createStore(rootReducer, initialState, compose(...enhancers));
	
// 	return store;
// };

// const store = configureStore();

// export default store;