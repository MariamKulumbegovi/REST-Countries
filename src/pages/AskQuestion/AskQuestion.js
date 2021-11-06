import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import css from './AskQuestion.module.css';
import axios from 'axios';
import { useState } from 'react';

export const AskQuestion = () => {

  const [data,setData]=useState()

  useEffect(async()=>{
    try {
      const result = await axios.get('https://restcountries.com/v3.1/all');
      const resdata=result.data
      setData(resdata.map(item=>{
        return console.log(item)
      }))
      
    } catch (error) {
      console.error(error, 'getdata');
    }
  },[setData])

 

 return (
   <div>
    {/* {data.map(item=>{
      return console.log(item.capital)
    })} */}
   </div>
 )
};


