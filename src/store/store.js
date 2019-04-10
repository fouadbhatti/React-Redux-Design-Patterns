import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpic';
import webSocketService from '../services/webSocket';

const epicMiddleware = createEpicMiddleware({
    dependencies: { webSocketServiceInstance: new webSocketService() }
  });

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}


