import { useState, useEffect } from "react"
import { Email_Min_Value } from "../../constants/Validation"


export const EmailInput=() => {
    const [value,setvalue]=useState("")
    const [hasError,setHasError]=useState(false)

    useEffect(()=>{
        
        if(value && value.length < Email_Min_Value) {
           setHasError(true)
        } else if (value && value.length >= Email_Min_Value){
            setHasError(false)
        }
    },[value])

    const setClassName=() => {
        let errorClassName="";
        if (hasError && value ) {
            errorClassName="is-danger"
        } else if (!hasError && value) {
            errorClassName="is-success"
        }
        
        return errorClassName;

    }



    return (
        <>
        <p className="control has-icons-left has-icons-right">
                 <input
                    className={`input ${setClassName()}`}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={value}
                    onChange={({target})=>setvalue(target.value)}  
                    />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
                { !hasError && value && <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                </span>}
                { hasError && value && <span class="icon is-small is-right">
                     <i class="fas fa-exclamation-triangle"></i>
                </span>}
        </p>
        </>

    )
}