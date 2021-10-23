import { useAuthContext } from "../../../components/providers/AuthProvider";
import { EmailInput, PasswordInput } from "../../../components/Elements"


export const LoginForm = () => {
    

   
const {logIn}=useAuthContext()

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
              logIn(result.token)
              
            }
        })
          .catch((error) => {
            console.log(error);
          });
      };
    
    return (
    
    <form className="content" onSubmit={onSubmit}>
      <code>
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
      </code>
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


// export const passValue=() => {
//   PasswordInput.value
// }

