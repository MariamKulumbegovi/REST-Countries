import { useEffect, useState } from "react"
import { getUserList } from "../services"




export const withUserList=(Component)=> {

    const WithUserList=props=>{

        const [users,setUsers]=useState([])

        const fetchdata=async () => {
            const data=await getUserList()
            console.log(data)
            setUsers(data)
         }
       useEffect(()=>{
          fetchdata()
          
       },[])
        return <Component {...props} userList={users}  />
    }
    return WithUserList
}

