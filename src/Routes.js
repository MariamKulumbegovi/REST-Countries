import { Switch, Route } from 'react-router';
import { Home, LoginForm, AskQuestion, Register } from './pages';
import * as route from './constants/routes';
import { SecurePage } from './components/Elements';
import CounterPage from './pages/counter/CounterPage';
import MainUserPage from './pages/MainUser/MainUserPage';
import { Products, TopProducts } from './pages/Products';

const routes = [
  {
    path: route.PRODUCTS_PATH,
    component: Products,
    routes: [
      {
        path: route.TOP_PRODUCTS_PATH,
        component: TopProducts,
      },
    ],
  },
];

export const RouteWithSubRoutes = ({ route }) => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

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
      <Route path={route.MAINUSER_PATH}>
        <MainUserPage />
      </Route>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} route={route} />
      ))}
    </Switch>
  );
};
