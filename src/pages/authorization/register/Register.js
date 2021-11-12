import { useState } from 'react';
import { EmailInput } from '../../../components/Elements';
import { ConfirmPassword } from '../../../components/Elements/confirmPassword/ConfirmPassword';
import { saveItem } from '../../../helpers/LocalStorage';
import { AUTH_TOKEN } from '../../../constants/Constants';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../../../constants/routes';
import { Registration } from '../../../services/RegisterService';
export const Register = () => {
  const [registered, setRegistered] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const registerData = {};

    for (let [key, value] of fd.entries()) {
      registerData[key] = value;
      delete registerData.confirmPassword;
    }

    const result = await Registration(registerData);
    saveItem(AUTH_TOKEN, result.token);
    setRegistered(true);
  };

  const register = () => {
    return (
      <form className="content mt60" onSubmit={onSubmit}>
        <code>"email": "eve.holt@reqres.in", " password": "pistol"</code>
        <div className="field">
          <EmailInput />
        </div>
        <div className="field">
          <ConfirmPassword />
        </div>

        <p className="control">
          <button className="button is-danger">Register</button>
        </p>
      </form>
    );
  };
  const registerSuccess = () => {
    return (
      <div className="content flex mt50">
        <div className="field">
          <h1 className="h1 ">Successfully Registered!</h1>
          <Link to={LOGIN_PATH} className="strong">
            {' '}
            Click here to log in
          </Link>
        </div>
      </div>
    );
  };

  return <>{registered ? registerSuccess() : register()}</>;
};
