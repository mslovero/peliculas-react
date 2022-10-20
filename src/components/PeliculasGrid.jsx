import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { PeliculaCard } from "./PeliculaCard"; 
import { Spinner } from "./Spinner"
import styles from "./PeliculasGrid.module.css"
//import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";



export function PeliculasGrid({ search }) {
    const [peliculas, setPeliculas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
 
    //const query = useQuery();
    //const search = query.get("search");
    //lo paso a ladingPage
    
    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
        ? "/search/movie?query=" + search  + "&page=" + page
        : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
           setPeliculas((prevPeliculas) => prevPeliculas.concat (data.results)) ;
           setHasMore(data.page < data.total_pages);
           setIsLoading(false);
          });
    }, [search, page]);

   if (!isLoading && peliculas.length === 0){
    return <Empty />
   }

    
    return(
            <InfiniteScroll
            dataLength= {peliculas.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner/>}
            >
            <ul className={styles.peliculasGrid}>
              {peliculas.map((pelicula) => (
               <PeliculaCard key={pelicula.id} pelicula={pelicula} />
              ))}
            </ul>
            </InfiniteScroll>
       
    );
}
//function  = a =>
//{peliculas.map(function(pelicula) {
    //return <li>{pelicula.title}</li>
//})}


//key es una clave unica  de react por si alguna vez cambiamos el orden de las listas, react optimisa



//los efectos no se ejecutan al momento
//los efectos se ejecutan una vez que el componente ese cargado en el Dom