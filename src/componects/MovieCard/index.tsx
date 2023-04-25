import './MovieCard.scss'
import { SearchMovieData } from '../../models/movie.model'
import { Link } from 'react-router-dom'

type Props = {
  movie: SearchMovieData
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{movie.Title}</span>
        <p>Year: {movie.Year}</p>
      </div>
      <div className='card-action'>
        <Link to={`movie/${movie.imdbID}`}>Read More</Link>
      </div>
    </div>
  )
}

export default MovieCard