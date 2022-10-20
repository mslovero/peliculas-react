
import { HiSearch } from "react-icons/hi"
import styles from "./Search.module.css"
import { useHistory } from "react-router"
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  
  const history = useHistory ();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
         <div className={styles.searchBox}>
            <input 
             className={styles.searchInput} 
             type="text" 
             value={search}
             placeholder="titulo"
             aria-label="search peliculas"
             onChange={(e)=> {
               const value = e.target.value;
                history.push("/?search=" + value)
             }}
             />
 
              <HiSearch size={20} color="black"className={styles.searchButton}/>
           
         </div>
        </form>
    )
}
