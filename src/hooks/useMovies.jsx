import { useCallback, useState } from 'react';
import { fetchMovies } from '../utils/api-themoviebd';
import { fetchNewMovies } from '../utils/api-themoviebd';
import { fetchGenres } from '../utils/api-themoviebd';
import { fetchInfo } from '../utils/api-themoviebd';
import { fetchCredits } from '../utils/api-themoviebd';


//CREACION ESTADOS PARA CARGAR LA INFO DE LAS PELICULAS Y SUS FUNCIONES ASINCRONAS:

export function useMovies(){
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);  
    const [newMovies, setNewMovies] = useState([]);  
    const [info, setInfo] = useState([null]);
    const [credits, setCredits] = useState(null);
    const [isLoading, setLoading] = useState(false);
    
    const getMovies = useCallback(async () =>{
        setLoading(true);
        const {data} = await fetchMovies()
        setMovies(data.results);
        setLoading(false)
        return movies;
    });

    const getNewMovies = async () =>{
        setLoading(true);
        const {data} = await fetchNewMovies()
        setNewMovies(data.results);
        setLoading(false);
        return newMovies
        
      }
     
    const getGenres = async () =>{
        setLoading(true);
        const {data} = await fetchGenres()
        setGenres(data.genres);
        setLoading(false);
        return genres;
    }

    const getInfo = async (movie_id) =>{
        setLoading(true);
        const {data} = await fetchInfo(movie_id)
        setInfo(data.info);
        setLoading(false);
        return info;
    }

    const getCredits = async (movie_id) =>{
        setLoading(true);
        const {data} = await fetchCredits(movie_id)
        setCredits(data.credits);
        setLoading(false);
        return credits;
    }
    

    return{
        movies,
        genres,
        newMovies,
        info,
        credits,
        isLoading,
        getMovies,
        getNewMovies,
        getGenres,
        getInfo,
        getCredits
    }
}