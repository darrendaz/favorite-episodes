import React from "react"
import { Store } from "./Store"

const EpisodesList = React.lazy(() => import("./EpisodesList"))

export default function FavPage() {
  const { state, dispatch } = React.useContext(Store)

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

  const props = {
    episodes: state.favorites,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        {props.episodes.length > 0 ? (
          <EpisodesList {...props} />
        ) : (
          "You dont have any favorites Yet"
        )}
      </div>
    </React.Suspense>
  )
}
