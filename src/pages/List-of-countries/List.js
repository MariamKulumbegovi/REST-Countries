import styles from './List.module.css';
import { useFetch } from '../../hooks/useFetch';

export const List = () => {
  const result = useFetch(`https://restcountries.com/v3.1/all`);
  const items = result.data;

  if (result.loading) {
    return <pre>Loading...</pre>;
  }
  if (!result.data) {
    return <code>Error</code>;
  }

  return (
    <div className={`content is-small ${styles[`bckcolor`]}`}>
      <h3 className={styles.white}>List</h3>

      <div className="">
        <table className={` ${styles[`tableback`]}`}>
          <tr>
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
      <div></div>
    </div>
  );
};
