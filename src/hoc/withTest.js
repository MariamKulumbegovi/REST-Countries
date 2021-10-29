import { useEffect, useState } from 'react';
import { getEmail } from '../services/testService';

export const withTest = Component => {
  const WithTest = props => {
    const [test, setTest] = useState([]);

    const getData = async () => {
      const data = await getEmail();
      setTest(data);
    };
    useEffect(() => {
      getData();
    }, []);

    return <Component {...props} colors={test} />;
  };
  return WithTest;
};
