import { Link } from "react-router-dom";
import styles  from "./PeliculaCard.module.css"
import { getMovieImg } from "../utils/getMovieImg";

export function PeliculaCard({ pelicula }) {
    const imageUrl = getMovieImg(pelicula.poster_path, 300)
    
    return (
        <li className={styles.peliculaCard}>
        <Link to={"/peliculas/" + pelicula.id}>
          <img
            width={230}
            height={345}
            className={styles.peliculaImagen}
            src={imageUrl} 
            alt={pelicula.title} 
           />
        <div>{pelicula.title}</div>
        </Link>
        </li>

    );
}