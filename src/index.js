import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { StoreProvider } from "./Store"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from "./HomePage"
import FavPage from "./FavPage"
import "./index.css"

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
)
