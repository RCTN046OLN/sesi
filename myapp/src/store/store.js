import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReducer, authReducer, counterReducer } from "./reducers";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
