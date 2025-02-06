import React from "react";
import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
