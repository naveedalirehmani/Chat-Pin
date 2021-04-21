import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./components/redux/reducer.js";

const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
