import React,{useEffect,useState} from 'react'
import { Recommend } from '../components'

import axios from '../api/axios'

const base_url = "https://image.tmdb.org/t/p/original/";
export function RecommendContainer({fetchUrl}){
    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false);

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
            
                <Recommend.Group>
                        {movies.map(movie => (
                            <Recommend.Frame>
                                {movie.title? (<Recommend.Header>{movie.title}</Recommend.Header>):(<Recommend.Header>Coming Soon...</Recommend.Header>)}
                                <Recommend.Image key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                                {movie.title? <Recommend.Button/>  : null}
                            </Recommend.Frame>
                    ))}
                </Recommend.Group>
            
        </Recommend>
    )
}