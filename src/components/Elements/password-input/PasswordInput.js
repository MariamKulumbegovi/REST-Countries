import { useState, useEffect } from "react";
import {Password_Min_Value} from '../../constants/Validation'

export const PasswordInput =() => {
    const [password,setPassword]=useState("")
    const [passwordError,setPasswordError]=useState("")

    

    let number = /[0-9]/;

    useEffect(()=>{if(password && password.length < Password_Min_Value || !number.test(password) ) {
        setPasswordError(true) 
        
    } else if (password && password.length >=Password_Min_Value || !number.test(password)){
        setPasswordError(false)
    }},[password])

    
   const getClassName= () => {
    let errorClassName=""
    if (passwordError && password ) {
        errorClassName="is-danger"
    } else if (!passwordError && password) {
        errorClassName="is-success"
    }
    return errorClassName;
   }

   return (
       <> 
        <p className="control has-icons-left has-icons-right">
            <input
                className={`input ${getClassName()}`}
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={({target})=>setPassword(target.value)}

                
            />
            <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
            </span>
            { !passwordError && password && <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
            </span>}
            { passwordError && password && <span class="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
            </span>}
        </p>
    
    
    
    </>
   )
}