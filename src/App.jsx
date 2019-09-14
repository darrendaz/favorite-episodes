import React from "react"
import { Store } from "./Store"

const EpisodesList = React.lazy(() => import("./EpisodesList"))

export default function App() {
  const { state, dispatch } = React.useContext(Store)

  const fetchDataAction = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    )
    const dataJSON = await data.json()

    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    })
  }

  const toggleFavAction = episode => {
    const episodeInFavorites = state.favorites.includes(episode)
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    }

    if (episodeInFavorites) {
      const favoritesWithoutEpisode = state.favorites.filter(
        fav => fav.id !== episode.id
      )
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favoritesWithoutEpisode
      }
    }
    return dispatch(dispatchObj)
  }

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })
  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites
  }
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="header">
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>Favorite(s) {state.favorites.length}</div>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
