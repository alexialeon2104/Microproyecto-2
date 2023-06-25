import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carrusel/Carousel";
import { useMovies } from "../../hooks/useMovies";
import styles from "./Home.module.css";


export function Home() {
  const { isLoading, movies, getMovies, genres, getGenres, newMovies, getNewMovies} = useMovies();
  const images = [ "https://i.ibb.co/Nyy0qgN/Saman.jpg","https://i.ibb.co/ZG05nJs/cinema.jpg","https://i.ibb.co/R4MggS3/cine2.jpg","https://i.ibb.co/sVsdzjw/Pantalla-de-cine.jpg","https://i.ibb.co/tsM6cgz/auditorio.jpg"];


 


  // Fetch para obtenerlas peliculas de la api
  useEffect(() => {
    if (!isLoading) {
      getMovies()
      getNewMovies()
    }
  }, []);

  return (
    <>
    {/* CARRUSEL DE IMAGENES*/} 

    <Carousel images={images}> </Carousel>

    {/* FILTRO DE BUSQUEDA POR NOMBRE DE PELICULA*/} 






    {/* SECCION DE PELICULAS DISPONIBLES MOSTRADAS EN CARTAS */}
      <div className={styles.container}> 
        <h1 className={styles.title}>Películas disponibles</h1>
        <div className={styles.now_playing}>
          {isLoading ? (
            <p className={styles.loading}>Cargando...</p>
          ) : (
            movies.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))
          )}
        </div>
      </div>

      {/* SECCION DE PROXIMOS ESTRENOS*/} 

      <div className={styles.container}> 
        <h1 className={styles.title}>Proximos estrenos</h1>
        <div className={styles.now_playing}>
          {isLoading ? (
            <p className={styles.loading}>Cargando...</p>
          ) : (
            newMovies.map((newMovie) => (
              <Card movie={newMovie} key={newMovie.id} />
            ))
          )}
        </div>
      </div>




      
    </>
  );
}


