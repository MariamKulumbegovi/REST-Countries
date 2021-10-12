import { useState, useEffect } from "react"
import { EmailInput } from "../Elements/email-input/EmailInput"
import { PasswordInput } from "../Elements/password-input/PasswordInput"



export const LoginForm = () => {

   
    

    const onSubmit=(event)=>{
        event.preventDefault()

    const formData= new FormData(event.target)
    const loginData={}
     for (let [key,value] of formData.entries()){
         loginData[key]=value
     }
    console.log(loginData)
          
    }
    
    return (
    
    <form onSubmit={onSubmit}>
        <div className="field">
        <EmailInput/>
           
        </div>
        <div className="field">
            <PasswordInput/>
        </div>
        <p className="control">
            <button className="button is-danger">
                    Login
            </button>
         </p>
     </form>
    
    )
 }