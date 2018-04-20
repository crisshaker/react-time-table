import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./css/normalize.css";
import "./css/styles.css";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
