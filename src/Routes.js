import { Switch, Route } from 'react-router';
import { LoginForm, News, Register } from './pages';
import * as route from './constants/routes';
import { SecurePage } from './components/Elements';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.LOGIN_PATH}>
        <LoginForm />
      </Route>
      <Route path={route.REGISTER_PATH}>
        <Register />
      </Route>
      <Route path={route.NEWS_PATH}>
        <SecurePage Component={News} />
      </Route>
    </Switch>
  );
};
