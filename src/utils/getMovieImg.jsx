import placeholder from "../utils/descarga.png"
 
 export function getMovieImg(path, width){
    return path ? `https://image.tmdb.org/t/p/w${width}${path}`  : placeholder;
 }
 