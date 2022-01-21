import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { Form } from "./components/form";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SignPage } from "./components/signPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/sign" element={<SignPage/>} />
        <Route path="/policy" element={"Условия"} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
