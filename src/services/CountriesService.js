import axios from "axios";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const getCountries=async() =>{
   
    try {
        
        const result = await axios.get('https://restcountries.com/v3.1/all',);
       
      
        return result.data
     
      
      } catch (error) {
      
      console.error(error)
        
      
      }
      
//     const res = useFetch(`https://restcountries.com/v3.1/all`, {});

//   if (res.loading) {
//     return <div>Loading...</div>;
//   } else if (!res.data) {
//     return <div>{console.error(res.error)}</div>;
//   }
//   const data=res.data
//   return data
}