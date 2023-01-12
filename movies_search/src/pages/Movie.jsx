import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {BsGraphUp,
        BsWallet2,
        BsHourglassSplit,
        BsFillFileEarmarkTextFill,
} from "react-icons/bs"
import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

    return (
      <div className="movie-page">
        <center>
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false}/><br />
            <div className="info">
              <h3><BsWallet2 />Orçamento: {formatCurrency(movie.budget)}</h3>
            </div>
            <hr />

            <div className="info">
              <h3><BsGraphUp />Faturamento: {formatCurrency(movie.revenue)}</h3>
            </div>
            <hr />

            <div className="info">
              <h3><BsHourglassSplit />Duração: {movie.runtime} min</h3>
            </div>
            <hr />

            <div className="info description">
              <h3><BsFillFileEarmarkTextFill />Descrição</h3>
              <p>{movie.overview}</p>
            </div>

            
          </>
        )}
        </center>
      </div>
    )
  }
  
  export default Movie