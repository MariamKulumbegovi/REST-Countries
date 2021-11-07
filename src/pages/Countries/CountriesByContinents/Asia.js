import { useFetch } from '../../../hooks/useFetch';
import styles from '../Countries.module.css'
import { withCountries } from '../../../hoc/withCountries';
// import Pagination from '../../../components/Elements/pagination/Pagination';


 const Asia = ({ countries}) => {
  
  {countries.map(item=>{
    if(item.region==`Asia`){
        return console.log(item)
  }})}


 return (

    <div>
        <div className="content">
        { countries.map(item=>{
            if(item.region==`Asia`){
                return( <div className="box is-flex is-justify-content-space-between" key={item.name.official}> 
                            <div>
                            <div><h1>{item.name.official}</h1></div>
                            <div>Common name- {item.name.common} </div>
                            <div>Capital- {item.capital} </div>
                            <div>Population- {item.population} </div>
                            <div>Region- {item.region} </div>
                            <div>Timezones- {item.timezones} </div>
                            </div>
                           
                            <div><img className={styles.flag} src={item.flags.svg}  height="auto" /></div>
                            
                            
                
                         </div> 
                         )

            }
        })}
        </div>

    </div>
 )
};

export default withCountries(Asia)