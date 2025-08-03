import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CustomCartProvider } from "./providers/CartContext.jsx";
import { App } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomCartProvider>
        <App />
      </CustomCartProvider>
    </BrowserRouter>
  </StrictMode>
);
