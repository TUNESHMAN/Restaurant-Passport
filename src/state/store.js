import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cityReducer from "../state/Reducers/cityReducer";
import restaurantReducer from "../state/Reducers/restaurantReducer";

const mainReducer = combineReducers({
  cityList: cityReducer,
  restaurantList: restaurantReducer,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (n) => n;

const store = createStore(
  mainReducer,
  {},
  compose(applyMiddleware(thunk /* ,etc , other middlewares */), devTools)
);

export default store;
