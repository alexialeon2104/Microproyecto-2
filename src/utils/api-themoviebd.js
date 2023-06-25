import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '6316cb86287cccddee193e9c0adbd3dd'
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'



export async function fetchMovies(){
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=28f882571b90834cf3bf26f959b6b90f')
}

export async function fetchNewMovies(){
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=28f882571b90834cf3bf26f959b6b90f')
}

export async function fetchGenres(){
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=28f882571b90834cf3bf26f959b6b90f')
}

export async function fetchInfo(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=28f882571b90834cf3bf26f959b6b90f`)
}

export async function fetchCredits(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=28f882571b90834cf3bf26f959b6b90f`)
}