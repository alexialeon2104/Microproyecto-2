import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { MOVIE_DETAIL_URL } from "../../urls/urls";
import {IMAGE_PATH} from "../../utils/api-themoviebd"


function Card({ movie}) {
    return (
     
        <Link
        to={MOVIE_DETAIL_URL(movie.id)}
        className={styles.link}
        >
          <div className={styles.container}>
          <div>
              <img
                src={IMAGE_PATH + movie.poster_path}
                alt={movie.origina_title}
                className={styles.image}
              />
            </div>

                <h2 className={styles.name}>
                    {movie.title}
                </h2>
                <h3 className={styles.subtitleInfo}>Idiomas: {movie.original_language}</h3>
                <h3 className={styles.subtitleInfo}>Géneros: {movie.genre_ids}</h3>

        </div>

        </Link>
            
      );
    }

    export default Card;
    