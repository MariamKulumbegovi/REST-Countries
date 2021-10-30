import { useEffect, useState } from 'react';
import { getNews } from '../services';

export const withNews = Component => {
  const WithNews = props => {
    const [news, setNews] = useState([]);

    const fetchdata = async () => {
      const data = await getNews();
      // console.log(data, "with")

      setNews(data);
    };
    useEffect(() => {
      fetchdata();
    }, []);
    return <Component {...props} news={news} />;
  };
  return WithNews;
};
