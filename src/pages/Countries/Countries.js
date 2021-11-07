import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import {
  AFRICA_PATH,
  AMERICAS_PATH,
  ASIA_PATH,
  EUROPE_PATH,
  OCEANIA_PATH,
  ALL_COUNTRIES_PATH
} from '../../constants/routes';
import {
  Africa,
  Americas,
  Asia,
  Oceania,
  Europe,
  AllCountries,
} from './CountriesByContinents';
import styles from './Countries.module.css';

export const Countries = () => {
  
  return (
    <div className="container is-fluid mt-5">
    <div >
    <div
        className={`navbar-item has-dropdown is-hoverable ${
          styles[`dropdown`]
        }`}
      >
        <Link to={ALL_COUNTRIES_PATH} className="navbar-link">Continents</Link>

        <div className="navbar-dropdown">
          <Link className="navbar-item" to={EUROPE_PATH}>
           
            Europe
          </Link>
          <Link className="navbar-item" to={ASIA_PATH}>
            Asia
          </Link>
          <Link className="navbar-item" to={AMERICAS_PATH}>
            Americas
          </Link>
          <Link className="navbar-item" to={OCEANIA_PATH}>
            Oceania
          </Link>
          <Link className="navbar-item" to={AFRICA_PATH}>
            Africa
          </Link>
        </div>
      </div>

      <div>
        <Switch>
          <Route path={EUROPE_PATH} component={Europe} />
          <Route path={ASIA_PATH} component={Asia} />
          <Route path={AMERICAS_PATH} component={Americas} />
          <Route path={OCEANIA_PATH} component={Oceania} />
          <Route path={AFRICA_PATH} component={Africa} />
        </Switch>
      </div>
    </div>
     
      
    </div>
  );
};
