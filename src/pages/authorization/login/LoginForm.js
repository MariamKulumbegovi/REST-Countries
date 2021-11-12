
import { EmailInput, PasswordInput } from "../../../components/Elements"
import { useHistory } from "react-router";
import {ASKQUESTION_PATH} from "../../../components/constants/routes"

export const LoginForm = () => {

   
    const history=useHistory()

    const onSubmit = (event) => {
        event.preventDefault();
    
        const fd = new FormData(event.target);
        const loginData = {};
    
        for (let [key, value] of fd.entries()) {
          loginData[key] = value;
        }
    
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
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
                history.replace(ASKQUESTION_PATH)
            }
        })
          .catch((error) => {
            console.log(error);
          });
      };
    
    return (
    
    <form className="content" onSubmit={onSubmit}>
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

