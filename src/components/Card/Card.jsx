import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { MOVIE_DETAIL_URL } from "../../urls/urls";



function Card({  movie }) {
    return (
      <div className={styles.container}>
        <div>
          <img
            src={movie.image}
            alt={movie.name}
            className={styles.image}
          />
        </div>
        <div className={styles.rightSideContainer}>
          <div className={styles.infoContainer}>
            <h2 className={styles.name}>
              <Link
                to={MOVIE_DETAIL_URL(movie.id)}
                className={styles.link}
              >
                {movie.name}
              </Link>
            /</h2>
            
           
            </div>
          </div>
          {/*<div className={styles.infoContainer}>
            <h3 className={styles.subtitle}>Last known location:</h3>
            <h3 className={styles.subtitleInfo}>
              {movie.last_known_location}
            </h3>
          </div>
          <div>
            <h3 className={styles.subtitle}>First seen in:</h3>
            <h3 className={styles.subtitleInfo}>{movie.first_seen_in}</h3>
          </div>
    </div>*/}
      </div>
    );
  }

  export default Card;
  