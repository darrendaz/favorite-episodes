import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom"
import HomePage from "./HomePage"
import FavPage from "./FavPage"
import { Store } from "./Store"

export default function App(props) {
  const state = React.useContext(Store)

  return (
    <React.Fragment>
      <div className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>

        <div>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorite(s)</Link>

          <Route path="/" exact component={HomePage} />
          <Route path="/favorites" exact component={FavPage} />
        </div>
      </div>
      {props.children}
    </React.Fragment>
  )
}
