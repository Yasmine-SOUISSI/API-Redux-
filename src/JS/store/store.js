import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";

// create store 
// applyMiddleware thunk (bch najem nabaeth les API)
export const store = createStore(rootReducer, applyMiddleware(thunk));