import { Counter } from "../counter"


export const Content =(props) => {

    const values= [1,2,3,4]

    return (
        <div>
            <div>
            {values.map((item)=>{
                return <Counter initialValue={item} key={`item-${item}`}/>
            })}
            </div>
        </div>
    )
}