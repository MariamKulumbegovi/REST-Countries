import { Switch, Route } from 'react-router';
import { Home, LoginForm, AskQuestion, Register } from './pages';
import * as route from './constants/routes';
import { SecurePage } from './components/Elements';
import { CounterPage } from './pages/counter/CounterPage';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.HOME_PATH} exact>
        <Home />
      </Route>
      <Route path={route.LOGIN_PATH}>
        <LoginForm />
      </Route>
      <Route path={route.REGISTER_PATH}>
        <Register />
      </Route>
      <Route path={route.ASKQUESTION_PATH}>
        <SecurePage Component={AskQuestion} />
      </Route>
      <Route path={route.COUNTER_PATH}>
        <CounterPage />
      </Route>
    </Switch>
  );
};
