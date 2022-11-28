import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']

};

const persistedreducer = persistReducer(persistConfig, rootReducer);

const middleware = [logger]
const enhancedMiddlewares = compose(applyMiddleware(...middleware))
export const store = createStore(persistedreducer, undefined, enhancedMiddlewares)

export const persistor = persistStore(store)