import { useState, useEffect } from 'react';

import '../css/News.css';
export const UseNewsEverything = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [searchParam] = useState(['title', 'content']);
  //   const [filterParam, setFilterParam] = useState('')

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=apple&q=bitcoin&' +
        new URLSearchParams({
          apiKey: 'c412962716b14ed9853ae3a5ef240781',
          pageSize: 40,
        })
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result.articles);
          console.log(result.articles);
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function search(items) {
    return items.filter(item => {
      return searchParam.some(newItem => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="container">
        <div className=" is-flex is-justify-content-start">
          <div className="search-wrapper">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input input"
                placeholder="Search for..."
                width="100%"
                value={q}
                onChange={e => setQ(e.target.value)}
              />
              <span className="sr-only">Search Articles</span>
            </label>
          </div>
        </div>
        <div className=" backColorDark margin-bottom ">
          {/* <select
      onChange={(e) => {
      setFilterParam(e.target.value);
       }}
       className="custom-select"
       aria-label="Filter Countries By Region">
        <option value="All">Filter By All</option>
        <option value="2021-10-30T16:30:32Z">2021-10-31</option>
        <option value="popularity">Popularity</option>
        <option value="publishedAt">PublishedAt</option>
        </select>
        <span className="focus"></span> */}
          <div className=" is-justify-content-center">
            <div className="columns is-flex-direction-column ">
              {search(items).map(item => {
                return (
                  <div className="columns  my-4" key={item.title}>
                    <article class="column is-flex-direction-column is-flex box 	">
                      <div className="is-justify-content-center is-flex box">
                        <h1 className="strong">{item.title}</h1>
                      </div>
                      <div>
                        <p className="has-text-danger">
                          Description:{item.description}
                        </p>
                      </div>

                      <p>{item.content} </p>
                      <div className="is-flex-direction-column	">
                        <div>
                          {' '}
                          <em className="has-text-danger">
                            {' '}
                            Author: {item.author}
                          </em>
                        </div>
                        <div>
                          {' '}
                          <time>PublishedAt:{item.publishedAt}</time>
                        </div>
                        <div>
                          {' '}
                          <a className="has-text-danger" to={item.source.name}>
                            Source : {item.source.name}{' '}
                          </a>
                        </div>
                        <div>
                          Go directly to the post - <a> {item.url} </a>
                        </div>
                        <div className="has-text-is-danger is-justify-content-center is-flex">
                          <img
                            src={item.urlToImage}
                            width="70%"
                            height="200px"
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
