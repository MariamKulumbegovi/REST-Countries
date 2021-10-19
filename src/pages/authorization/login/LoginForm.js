
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
    
        fetch('https://reqres.in/api/login', {
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


// import { useHistory } from "react-router-dom";
// import { EmailInput, PasswordInput } from "../../../components/Elements/index";
// // import { PasswordInput } from "../../atoms/PasswordInput";
// // import { DOCUMENTATION_PATH } from "../../constants/routes";

// export const LoginForm = () => {
//   const history = useHistory();

 

//   return (
//     <form onSubmit={onSubmit}>
//       <div className="field">
//         <EmailInput name="email" />
//       </div>
//       <div className="field">
//         <PasswordInput name="password" />
//       </div>
//       <div className="field">
//         <p className="control">
//           <button className="button is-success" type="submit">
//             Login
//           </button>
//         </p>
//       </div>
//     </form>
//   );
// };