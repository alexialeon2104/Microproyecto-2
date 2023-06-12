import { useState } from 'react';
import { fetchMovies } from '../utils/api-themoviebd';
import { fetchNewMovies } from '../utils/api-themoviebd';
import { fetchGenres } from '../utils/api-themoviebd';


//CREACION ESTADOS PARA CARGAR LA INFO DE LAS PELICULAS Y SUS FUNCIONES ASINCRONAS:

export function useMovies(){
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);    
    const [newMovies, setNewMovies] = useState([]);  
    const [info, setInfo] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
    const getMovies = async () =>{
        setLoading(true);
        const {data} = await fetchMovies()
        setMovies(data.results);
        setLoading(false);
    }

    const getNewMovies = async () =>{
        setLoading(true);
        const {data} = await fetchNewMovies()
        setNewMovies(data.results);
        setLoading(false);
      }
     
    const getGenres = async () =>{
        const {data} = await fetchGenres()
        setGenres(data.genres);
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