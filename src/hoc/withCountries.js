import { useEffect, useState } from 'react';
import { getCountries } from '../services/CountriesService';

export const withCountries = Component => {
  const WithCountries = props => {
    const [countries, setCountries] = useState([]);
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    useEffect(() => {
      fetchCountries();
    }, []);

    return <Component {...props} countries={countries} />;
  };
  return WithCountries;
};
