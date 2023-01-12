import { Link } from "react-router-dom"

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <br />
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        <br />
        {showLink && <Link to={`/movie/${movie.id}`}>Ver Mais</Link>}
    </div>
  )
}

export default MovieCard