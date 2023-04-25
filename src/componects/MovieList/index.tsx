import './MovieList.scss'
import MovieCard from '../MovieCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'


const MovieList = () => {
    const {movies} = useSelector((state: RootState) => state.movies)
  return (
    <div className='movie-container'>
        {movies && movies.map((movie)=><MovieCard key={movie.imdbID} movie={movie}/>)}
    </div>
  )
}

export default MovieList