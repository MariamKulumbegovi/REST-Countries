import '../../../App.css';
import { Redirect, Route } from 'react-router';
import { useAuthContext } from '../../providers/AuthProvider';
import { LOGIN_PATH } from '../../../constants/routes';

export const SecurePage = ({ Component, ...rest }) => {
  const { loggedIn } = useAuthContext();
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PATH} />
      }
    />
  );
};
