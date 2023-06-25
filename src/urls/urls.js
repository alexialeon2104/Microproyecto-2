export const HOME_URL = "/home";
export const FAVORITES_URL = "/favorites";
export const LOGIN_URL = "/";
export const REGISTER_URL = "/register";
export const PROFILE_URL = "/profile";
export const MOVIE_DETAIL_URL = (movieId = ":movieId") =>
  `/movies/${movieId}`;