import { useCallback, useState } from 'react';
import { fetchMovies } from '../utils/api-themoviebd';
import { fetchNewMovies } from '../utils/api-themoviebd';
import { fetchGenres } from '../utils/api-themoviebd';


//CREACION ESTADOS PARA CARGAR LA INFO DE LAS PELICULAS Y SUS FUNCIONES ASINCRONAS:

export function useMovies(){
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);  
    const [newMovies, setNewMovies] = useState([]);  
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
    

    return{
        movies,
        genres,
        newMovies,
        isLoading,
        getMovies,
        getNewMovies,
        getGenres
    }
}