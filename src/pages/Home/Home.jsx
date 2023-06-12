import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useMovies } from "../../hooks/useMovies";
import "./Home.module.css";

export function Home() {
  const { isLoading, movies, getMovies } = useMovies();


 


  // Fetch para obtener las peliculas de la api
  useEffect(() => {
    if (!isLoading) {
      getMovies();
    }
  }, [getMovies]);

  return (
    <>
    {/* CARRUSEL DE IMAGENES*/} 





    {/* FILTRO DE BUSQUEDA POR NOMBRE DE PELICULA*/} 






    {/* SECCION DE PELICULAS DISPONIBLES MOSTRADAS EN CARTAS */}
      <div className="container"> 
        <h1 className="title">Cartelera</h1>
        <div className="movies">
          {isLoading ? (
            <p className="loading">Cargando...</p>
          ) : (
            movies.map((movie) => (
              <Card character={movie} key={movie.name} />
            ))
          )}
        </div>
      </div>

      {/* SECCION DE PROXIMOS ESTRENOS*/} 






      
    </>
  );
}


