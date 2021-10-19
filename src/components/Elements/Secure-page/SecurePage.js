import '../../../App.css'
import { Redirect } from 'react-router'
import { HOME_PATH } from '../../constants/routes'


export const SecurePage = ({Component,...props}) => {

    const loggedIn=true
   
    return loggedIn? <Component {...props} />:<Redirect to={HOME_PATH}/>
      
      

    
}