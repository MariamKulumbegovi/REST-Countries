import { useState } from "react";
import { useAuthContext } from "../../../components/providers/AuthProvider";
import { EmailInput } from "../../../components/Elements"
import { ConfirmPassword } from "../../../components/Elements/confirmPassword/ConfirmPassword";
import { saveItem } from "../../../components/helpers/LocalStorage";
import { AUTH_TOKEN } from "../../../components/constants/Constants";
import '../../../App.css'
export const Register = () => {
    
    const [registered,setRegistered]=useState(false)
   
// const {logIn}=useAuthContext()

    const onSubmit = (event) => {
        event.preventDefault();
    
        const fd = new FormData(event.target);
        const loginData = {};
        
    
        for (let [key, value] of fd.entries()) {
          loginData[key] = value;
          delete loginData.confirmPassword;
         
        }
        console.log(loginData)
        
    
        fetch(`${process.env.REACT_APP_API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(loginData),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.token){
             saveItem(AUTH_TOKEN,result.token) 
             setRegistered(true)
            }
        })
          .catch((error) => {
            console.log(error);
          });

          
      };
      const register=()=> {
          return (
             
            <form className="content" onSubmit={onSubmit}>
            <code>
            "email": "eve.holt@reqres.in",
            " password": "pistol"
        </code>
        <div className="field">
            <EmailInput/>
            
            </div>
            <div className="field">
            <ConfirmPassword/>
            </div>
            
            <p className="control">
                <button className="button is-danger" >
                        Register
                </button >
            </p>
            
        </form>
          )
    
      }
      const registerSuccess=()=> {
        return (
        <div className="content flex">
            <div className="field"> 
                <h1 className="h1">Successfully Registered!</h1>
                <strong className="strong"> You can go to the log in page now</strong>
            </div>
        </div>
       
        )
    }
    
    return  (
    <>
    {registered?registerSuccess() :  register()  }
    </>
    )
 }




