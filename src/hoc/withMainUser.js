import { useState, useEffect } from 'react';
import { getMainUser } from '../services/MainUserService';

export const withMainUser = Component => {
  const WithMainUser = props => {
    const [mainUser, setMainUser] = useState([]);

    const getData = async () => {
      const data = await getMainUser();

      setMainUser(data);
    };

    useEffect(() => {
      getData();
    }, []);

    return <Component {...props} main={mainUser} />;
  };
  return WithMainUser;
};
