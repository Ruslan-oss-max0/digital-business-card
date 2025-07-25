import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
