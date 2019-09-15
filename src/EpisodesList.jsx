import React from "react"
export default function EpisodesList(props) {
  const { episodes, toggleFavAction, favorites } = props

  return episodes.map(episode => {
    return (
      <section className="episode-box" key={episode.id}>
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ dispay: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Ep: {episode.number}
          </div>
          <button onClick={() => toggleFavAction(episode)}>
            {favorites.find(fav => fav.id === episode.id) ? "Unfav" : "Fav"}
          </button>
        </section>
      </section>
    )
  })
}
