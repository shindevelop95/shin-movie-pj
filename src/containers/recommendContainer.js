import React,{useEffect,useState} from 'react'
import { Recommend } from '../components'
import axios from '../api/axios'

const base_url = "https://image.tmdb.org/t/p/original/";
export function RecommendContainer({fetchUrl}){
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl])
    return(
        <Recommend>
            <Recommend.Frame>
                <Recommend.Group>
                        {movies.map(movie => (
                        <Recommend.Image key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                    ))}
                </Recommend.Group>
            </Recommend.Frame>
        </Recommend>
    )
}