import PropTypes from "prop-types"
import { formatUser, currentUser } from "./helpers/user"
import { logGroup } from "./helpers/Loggroup";
import {User as Userclass} from "./models/userModel"




export const User=({user})=> {

logGroup(user, "USER COMPONENT")

    return (
        
        <div className="content">
            <p className="modal-content " title={currentUser.Specialty}>Actress-{formatUser(user)}</p>
            <em className="modal-content">bio-{user.bio} </em>
            <em className="modal-content"   >age-{user.age}</em>
        </div>
        

    )
};

User.defaultProps= {
   user: new Userclass ("Missing firstName", "Missing lastName"),
   title:"no title",
}

User.propTypes = {
    title:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}