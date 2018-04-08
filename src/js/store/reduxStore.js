import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import rootReducer from '../reducers/rootReducer';

export function configureStore() {
  const middleware = applyMiddleware(thunk);

  const createStoreWithMiddleware = compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  return createStoreWithMiddleware(createStore)(rootReducer, {});
}
