import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import styles from "./MovieDetail.module.css";
import { IMAGE_PATH } from "../../utils/api-themoviebd";

export function MovieDetail() {

// ESTADOS PARA CARGAR LAS PELICULAS EN LA INTERFAZ

  const { movie_id } = useParams();
  const { getInfo, info, isLoading } = useMovies();

  const { original_title, poster_path,overview, original_language, runtime  } = info || {};

  useEffect(() => {
    if (!isLoading && movie_id) {
      getInfo(movie_id);
    }
  }, []);

  //SI SE CARGA CORRECTAMENTE LA INFO DE LA PELICULA*/

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>Loading...</h1>
      </div>
    );
  }

  // SI NO SE ENCUENTRA LA PELICULA AL CARGAR 

  if (!isLoading && !info) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingTxt}>NOT FOUND DATA</h1>
      </div>
    );
  }

  // ESTRUCTURA DE LA PAGINA*/

  return (
    <>
    {/*SECCION CON LA INFORMACION DE LA PELICULA*/}
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={IMAGE_PATH + poster_path} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{original_title}</h1>
        <p className={styles.info}>Sinopsis: {overview}</p>
        <p className={styles.info}>Idiomas: {original_language}</p>
        <p className={styles.info}>Duración: {runtime} min</p>
      </div>
      <button>
        {/*BOTON DE RESERVA*/}
        </button>
      <button>
        {/*MARCADOR DE FAVORITO*/}
        </button>
    </div>
    </>
  );
}
