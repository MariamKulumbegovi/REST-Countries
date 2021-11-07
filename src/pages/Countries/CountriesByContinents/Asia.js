import { useFetch } from '../../../hooks/useFetch';
import styles from '../Countries.module.css'
export const Asia = () => {
  const res = useFetch(`https://restcountries.com/v3.1/all`, {});

  if (res.loading) {
    return <div>Loading...</div>;
  } else if (!res.data) {
    return <div>{console.error(res.error)}</div>;
  }
  const data=res.data
  
  {data.map(item=>{
    if(item.region==`Asia`){
        return console.log(item)
  }})}

 return (

    <div>
        <div className="content">
        {data.map(item=>{
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
