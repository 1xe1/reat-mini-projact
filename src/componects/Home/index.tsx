import { useState, useEffect } from 'react'
import MovieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import './Home.scss'
import MovieList from '../MovieList'
import { useAppDispatch } from '../../store/store'
import { addMovie } from '../../store/slices/moiveSlice'

type Props = {}

const Home = ({}: Props) => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState<string>('')

    const fetchMovie = async () => {
        try {
            const searchKey = search ? search : 'spider'
            const {data:movie} = await MovieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)
            
            setTimeout(() => {
                dispatch(addMovie(movie.Search))
            }, 500);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMovie()
    },[search])

  return (
    <>
        <h3 style={{margin:'1rem 0'}}>Movie</h3>
        <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <MovieList />
    </>
  )
}

export default Home