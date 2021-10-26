import '../../../App.css';
import { Redirect } from 'react-router';
import { HOME_PATH } from '../../../constants/routes';
import { useAuthContext } from '../../providers/AuthProvider';

export const SecurePage = ({ Component, ...props }) => {
  const { loggedIn } = useAuthContext();

  return loggedIn ? <Component {...props} /> : <Redirect to={HOME_PATH} />;
};
