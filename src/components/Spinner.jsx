import { ImSpinner9 } from 'react-icons/im';
import styles from "./Spinner.module.css"



export function Spinner  () {
    return (
        <div className={styles.spinner}>
            <ImSpinner9 className={styles.spinnig} size={60}/>
        </div>
    )
}
