import React from "react"

import { Store } from "./Store"

export default function App(props) {
  const state = React.useContext(Store)

  return (
    <React.Fragment>
      <div className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorite(s) {state.favorites.length}</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/favorites" exact component={FavPage} />
      </Router>
      {props.children}
    </React.Fragment>
  )
}
