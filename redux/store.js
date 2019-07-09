import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import {AsyncStorage} from 'react-native';
import authReducer from './reducers/auth.reducer'


const rootReducer = combineReducers({
  authReducer
})

// const persistConfig = {
//   key: 'key2',
//   storage:AsyncStorage,
  
// }

const logger = createLogger()



export const store = createStore(
  rootReducer,
 applyMiddleware(thunk,logger)
);

// export const persistor = persistStore(store)
