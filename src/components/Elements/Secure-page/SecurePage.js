import '../../../App.css';
import { Redirect } from 'react-router';
import { LOGIN_PATH } from '../../../constants/routes';
import { useAuthContext } from '../../providers/AuthProvider';

export const SecurePage = ({ Component, ...props }) => {
  const { loggedIn } = useAuthContext();

  return loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PATH} />;
};
