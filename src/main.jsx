import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import "./styles/theme.css";
import Lenis from "lenis";
import "./styles/scrollbar.css";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);