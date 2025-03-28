// main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <ToastContainer
            position="top-center"
            autoClose={3000} // 3 seconds
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
        />
        ;
    </StrictMode>
);
