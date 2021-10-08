import { useState } from 'react'
import PropTypes, { number } from 'prop-types'
import '../../css/counter.css'


export const Counter =({initialValue}) => {
  
    const [count, Setcount]=useState(initialValue)

    const addNumber=() => {
        Setcount(count + 1)
    }
    const resetNumber=() => {
        Setcount(0)
    }
    const subtractNumber=()=> {
        Setcount(count - 1)
    }
    const United =(number) => {
        return Setcount(count+number)
    }

    return (
        <div className="box">
            <div className="h">
                <h1 className='h'>Let's count- {count}</h1>
            </div>
            <div className="h button-wrapper ">
                <button className="button is-info" onClick={addNumber}>+</button>
                <button className="button mx-2" onClick={subtractNumber}>-</button>
                <button className="button is-danger" onClick={resetNumber}>0</button>
            </div>
            <div className="h button-wrapper ">
                <button className="button is-link" onClick={()=>United(5)}>5</button>
                <button className="button is-dark mx-2" onClick={()=>United(-5)}>-5</button>
                <button className="button is-warning" onClick={()=> United(10)}>10</button>
                <button className="button mx-2 is-info " onClick={()=> United(-10)}>-10</button>
            </div>
        </div>
        
    )
}

Counter.defaultProps = {
    initialValue:0
}
Counter.propTypes = {
    initialValue:PropTypes.number.isRequired
}