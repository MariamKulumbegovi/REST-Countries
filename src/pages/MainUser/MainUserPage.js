import { useEffect } from 'react';
import { withMainUser } from '../../hoc';
import '../../App.css';
const MainUserPage = ({ main }) => {
  useEffect(() => {}, [main]);
  return (
    <div className="box is-flex-direction-column	">
      <img src={main.avatar} width="250px" height="200px" />
      <div className="">
        <div>
          <em className="strong">
            {main.first_name} {main.last_name}{' '}
          </em>
          <button className="button mx-2">Change your name</button>
        </div>
      </div>
      <em className="strong">{main.email} </em>
    </div>
  );
};
export default withMainUser(MainUserPage);
