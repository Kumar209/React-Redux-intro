import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducers/index";
const store = createStore(rootReducer);
// Through consoling you can check your working of store is complete or note, it wills show you object which contains all data
// console.warn("store data", store);  

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
