import { Switch, Route } from 'react-router';
import { Home, LoginForm, AskQuestion, Register } from './pages';
import * as route from './constants/routes';
import { SecurePage } from './components/Elements';
import { Products, TopProducts } from './pages/Products';

const routes = [
  { 
    path: route.HOME_PATH, 
    component: Home, 
    exact: true },
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
  {
    path:route.LOGIN_PATH,
    component:LoginForm
  },
  {
    path:route.REGISTER_PATH,
    component:Register
  },
  
  
  
  
];

export const RouteWithSubRoutes = ({ route }) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route path={route.ASKQUESTION_PATH}>
        <SecurePage Component={AskQuestion} />
      </Route>
     
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} route={route} {...route} />;
      })}
    </Switch>
  );
};
