import axios from 'axios';


export const getUserList=async()=>{
  try
  {const result=await axios.get('https://reqres.in/api/users') 
  return result.data.data
}
  catch(error){
    console.log(error, 'getUserList')
  }
  
}