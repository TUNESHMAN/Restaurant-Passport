import { createStore, combineReducer, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

const mainReducer = combineReducer({
    cities: cityReducer,
    restaurant: restaurantReducer
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (n) => n;

const store = createStore(
  combineReducer,
  {},
  compose(applyMiddleware(thunk /* ,etc , other middlewares */), devTools)
);

export default store;