
import { DETAILED_INFO_PATH } from '../../constants/routes';
import styles from './List.module.css';
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react/cjs/react.development';

export const List = () => {
  const result = useFetch(`https://restcountries.com/v3.1/all`);
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

  if (result.loading) {
    return <pre>Loading...</pre>;
  }
  if (!result.data) {
    return <code>Error</code>;
  }
  

  return (
    <div className={`content ${styles[`bckcolor`]}`}>
      <h3 className={styles.white}>List</h3>
      {/* <Link to={DETAILED_INFO_PATH}>Detailed info</Link>
      <Switch>
        <Route path={DETAILED_INFO_PATH} component={DetailedInfo} />
      </Switch> */}
      <div>
        <table className={styles.tableback}>
          <tr >
            <th className={styles.th}>Country</th>
            <th className={styles.th}>Population</th>
            <th className={styles.th}>Area</th>
          </tr>
          {items.map(item => {
            return (
              <>
                <tr className={styles.white} key={item.capital}>
                  <td className={styles.white}>{item.name.official}</td>
                  <td className={styles.white}>{item.population}</td>
                  <td className={styles.white}>{item.area}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
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
