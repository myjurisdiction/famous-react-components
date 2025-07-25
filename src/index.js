import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import reportWebVitals from "./reportWebVitals";

import { MyRouter } from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
