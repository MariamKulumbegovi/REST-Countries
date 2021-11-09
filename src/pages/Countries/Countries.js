import PropTypes from 'prop-types';
import styles from './Countries.module.css';
import { useState, useEffect, memo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { UseModal } from '../../hooks/UseModal';

export const Countries = ({ initialValue }) => {
  const [q, setQ] = useState('');
  const [searchParam] = useState(['altSpellings']);

  const [filterParam, setFilterParam] = useLocalStorage('Region', initialValue);

  const result = useFetch(`https://restcountries.com/v3.1/all`);
  useEffect(() => {}, [setQ, setFilterParam]);
  const items = result.data;

  //scroll to top button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  //scroll to top button

  useEffect(() => {}, [search]);
  if (result.loading) {
    return <pre>Loading...</pre>;
  }
  if (!result.data) {
    return <code>Error</code>;
  }

  console.log(items, 'items');

  function search(items) {
    return items.filter(item => {
      if (item.region == filterParam) {
        return searchParam.some(newItem => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == 'All') {
        return searchParam.some(newItem => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <div className={`content ${styles[`bckcolor`]}`}>
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input input"
            placeholder="Search for..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <span className="sr-only">Search countries here</span>
        </label>
        <div className="select mt-5 mb-5">
          <select
            onChange={e => {
              setFilterParam(e.target.value);
            }}
            className="custom-select"
            aria-label="Filter Countries By Countries"
          >
            <option value="All">Filter By Region</option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <span className="focus"></span>
        </div>
      </div>

      {search(items).map(item => (
        <div
          className="box is-flex is-justify-content-space-between"
          key={item.name.official}
        >
          <div>
            <div>
              <h1>{item.name.official}</h1>
            </div>
            <div>Common name- {item.name.common} </div>
            <div>Capital- {item.capital} </div>
            <div>Population- {item.population} </div>
            <div>Region- {item.region} </div>
            <div>Timezones- {item.timezones} </div>
            <div className="mt-2">
                     <UseModal data={item} />
             </div>
          </div>

          <div>
            <img className={styles.flag} src={item.flags.svg} height="auto" />
          </div>
        </div>
      ))}
      <div>
        <div className={styles.container}>
          <div className={(styles.box, styles.box1)}></div>
          <div className={(styles.box, styles.box2)}></div>
          <div className={(styles.box, styles.box3)}></div>
          <div className={(styles.box, styles.box4)}></div>
          <div className={(styles.box, styles.box5)}></div>
        </div>
        {showButton && (
          <button onClick={scrollToTop} className={styles.backtotop}>
            &#8679;
          </button>
        )}
      </div>
    </div>
  );
};


Countries.defaultProps = {
  initialValue: 'All',
};
