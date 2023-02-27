import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { initPage } from "./categories-list/iteration";
import "./styles.scss";

ReactDOM.render(<App />, document.getElementById("root"));

document.addEventListener("DOMContentLoaded", initPage);
