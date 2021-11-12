
import Countries from '../../img/countries.png';
import styles from './Home.module.css'
export const Home=()=>{



    return(
        <div className={`content ${styles[`mt60`]}`}>
          
            <img
              
              src={Countries}
              width="auto"
              height="auto"
            />
        </div>
    )
}