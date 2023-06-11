import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useCharacters } from "../../hooks/useCharacters";
import "./HomePage.css";

export function Home() {
  const { isLoading, characters, getCharacters } = useCharacters();


 


  // Fetch para obtener las peliculas de la api
  useEffect(() => {
    if (!isLoading) {
      getCharacters();
    }
  }, [getCharacters]);

  return (
    <>
    {/* CARRUSEL DE IMAGENES*/} 





    {/* FILTRO DE BUSQUEDA POR NOMBRE DE PELICULA*/} 






    {/* SECCION DE PELICULAS DISPONIBLES MOSTRADAS EN CARTAS */}
      <div className="container"> 
        <h1 className="title">Cartelera</h1>
        <div className="characters">
          {isLoading ? (
            <p className="loading">Cargando...</p>
          ) : (
            characters.map((character) => (
              <Card character={character} key={character.name} />
            ))
          )}
        </div>
      </div>

      {/* SECCION DE PROXIMOS ESTRENOS*/} 






      
    </>
  );
}


