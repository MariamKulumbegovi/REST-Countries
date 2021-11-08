import styles from '../Countries.module.css';
import { withCountries } from '../../../hoc/withCountries';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Asia = ({ countries }) => {
  function Items({ currentItems }) {
    {
      return (
        <div className="content">
          {currentItems &&
            currentItems.map(item => {
              return (
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
                  </div>

                  <div>
                    <img
                      className={styles.flag}
                      src={item.flags.svg}
                      height="auto"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const store = [];
    const asia = () => {
      countries.map(item => {
        if (item.region == 'Asia') {
          return store.push(item);
        }
      });
    };
    asia();

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading countries from ${itemOffset} to ${endOffset}`);
      setCurrentItems(store.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(store.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = event => {
      const newOffset = (event.selected * itemsPerPage) % store.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className={`pagination-link  pagination is-flex is-justify-content-space-evenly  ${
            styles[`mb40, backWhite`]
          }`}
        />
      </>
    );
  }
  return (
    <>
      <PaginatedItems itemsPerPage={5} />
    </>
  );
};

export default withCountries(Asia);
