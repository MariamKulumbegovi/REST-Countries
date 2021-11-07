import { Switch, Route } from 'react-router';
import { LoginForm, Countries, Register } from './pages';
import * as route from './constants/routes';
import { SecurePage } from './components/Elements';
import { Products, TopProducts } from './pages/Products';

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.LOGIN_PATH} component={LoginForm} />
      <Route path={route.REGISTER_PATH} component={Register} />
      <Route path={route.PRODUCTS_PATH}>
        <SecurePage Component={Products} />
      </Route>
      <Route path={route.COUNTRIES_PATH}>
        <SecurePage Component={Countries} />
      </Route>
    </Switch>
  );
};
