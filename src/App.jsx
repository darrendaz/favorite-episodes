import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from "./HomePage"
import FavPage from "./FavPage"
import { Store } from "./Store"

export default function App(props) {
  const { state } = React.useContext(Store)

  return (
    <React.Fragment>
      <Router>
        <div className="header">
          <div className="logo-container">
            <h1>Rick and Morty</h1>
            <small>Pick your favorite episodes</small>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/favorites">
                  <h1>
                    Favorite(s) {state.favorites && state.favorites.length}
                  </h1>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/favorites" exact component={FavPage} />
        </div>

        {props.children}
      </Router>
    </React.Fragment>
  )
}
