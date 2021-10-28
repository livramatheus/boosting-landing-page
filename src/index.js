import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Home from "./pages/Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  rootElement
);
