import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner"
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./PeliculaDetails.module.css"

export function PeliculaDetails() {
    const { peliculaId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [pelicula, setPelicula] = useState(null);



    useEffect(() => {
      setIsLoading(true);

      get("/movie/" + peliculaId).then(data =>{
        setIsLoading(false);
        setPelicula(data);

      })
    }, [peliculaId]);

    if (isLoading) {
      return <Spinner />
    }

    
    const imageUrl = getMovieImg (pelicula.poster_path, 500) ;
    return (
    
    <div className= {styles.detailsContainer}>
        <img
         className={`${styles.col} ${styles.peliculaImagen}`} 
          src={imageUrl} 
          alt={pelicula.title}
        />
      <div className={`${styles.col} ${styles.peliculaDetails}`}>
        <p className={styles.titutoPrimero}> 
          <strong>Title:</strong> {pelicula.title}
        </p>
        <p>
            <strong>Genres:</strong>{" "}
            {pelicula.genres.map((genre)=> genre.name).join(", ")}
        </p>
        <p> 
          <strong>Description:</strong>{pelicula.overview}
         </p>
        
      </div>
    </div>
    
    
    

   );

    }