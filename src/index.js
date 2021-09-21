import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import GlobalStyles from "./globalStyles";
import Provider from "./components/App/Provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
