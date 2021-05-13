import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./pages/index.jsx";
import { Router, Link } from "@reach/router";
import { ChakraProvider, Box } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Router>
        <App path="/" />
        <App path="/about" />
        <App path="/projects" />
        <App path="/contact" />
        <App default />
      </Router>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
