import { Counter } from "../counter"
import { LoginForm } from "../forms"


export const Content =(props) => {

    // const values= [1,2,3,4]

    return (
        <div className="section is-medium">
            {/* <div>
            {values.map((item)=>{
                return <Counter initialValue={item} key={`item-${item}`}/>
            })}
            </div> */}
            <LoginForm/>

        </div>
    )
} 