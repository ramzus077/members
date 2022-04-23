import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers/membersReducer';

let middlewares:any[] = [];

if (__DEV__) {
  const logger =  require('redux-logger');

  const loggerMiddleware = logger.createLogger({
    duration: true,
  });

  middlewares = [...middlewares, loggerMiddleware];
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export type AppDispatch = typeof store.dispatch;

export default store;