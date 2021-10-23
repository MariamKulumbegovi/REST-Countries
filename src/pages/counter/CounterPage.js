import { Counter } from "../../components/counter"



export const CounterPage =() => {

    const values= [1,2,3,4]

    return (
        <div className="section is-medium">
            <div>
            {values.map((item)=>{
                return <Counter initialValue={item} key={`item-${item}`}/>
            })}
            </div>
            
            

        </div>
    )
} 