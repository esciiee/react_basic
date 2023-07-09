import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
