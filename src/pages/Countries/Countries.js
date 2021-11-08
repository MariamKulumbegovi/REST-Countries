import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import {
  AFRICA_PATH,
  AMERICAS_PATH,
  ASIA_PATH,
  EUROPE_PATH,
  OCEANIA_PATH,
  ALL_COUNTRIES_PATH,
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
    <div className={`container is-fluid    ${styles[`bckcolor`]}`}>
      <div>
        <div
          className={`navbar-item has-dropdown is-hoverable mt-6 ${
            styles[`dropdown`]
          }`}
        >
          <Link to={ALL_COUNTRIES_PATH} className="navbar-link">
            Continents
          </Link>

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
          <div>
            <Link className="navbar-item" to={ALL_COUNTRIES_PATH}>
              All
            </Link>
          </div>
        </div>

        <div>
          <Switch>
            <Route path={ALL_COUNTRIES_PATH} component={AllCountries} />
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

//   function PaginatedItems({ itemsPerPage }) {
//     // We start with an empty list of items.
//     const [currentItems, setCurrentItems] = useState(null);
//     const [pageCount, setPageCount] = useState(0);
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);

//     useEffect(() => {

//       const endOffset = itemOffset + itemsPerPage;
//       console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//       setCurrentItems(items.slice(itemOffset, endOffset));
//       setPageCount(Math.ceil(items.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage]);

//     // Invoke when user click to request another page.
//     const handlePageClick = event => {
//       const newOffset = (event.selected * itemsPerPage) % items.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//       );
//       setItemOffset(newOffset);
//     };

//     return (
//       <>
//         <Items currentItems={currentItems} />
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//           className="pagination-link  pagination is-flex is-justify-content-space-evenly backWhite"
//         />
//       </>
//     );
//   }
//   return (
//     <>
//       <PaginatedItems itemsPerPage={5} />
//     </>
//   );

// }

// }

// import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import { useFetch } from "../../hooks/useFetch"
// import styles from './Countries.module.css'
// import Asia from './CountriesByContinents/Asia';

// export const Countries = () => {

//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [q, setQ] = useState('');
//   const [searchParam] = useState(['continents']);
//     const [filterParam, setFilterParam] = useState(['all'])

//   const result=useFetch(`https://restcountries.com/v3.1/all`)
//  const items=result.data
//   if (!result.data) {
//         return <div>...Loading</div>
//       }

// console.log(items,"items")
//   function Items({ currentItems }) {{

//       return (
//         <div className="content">

//           { currentItems &&
//            (currentItems).map(item => (
//                           <div className="box is-flex is-justify-content-space-between" key={item.name.official}>
//                                 <div>
//                                 <div><h1>{item.name.official}</h1></div>
//                                 <div>Common name- {item.name.common} </div>
//                                 <div>Capital- {item.capital} </div>
//                                 <div>Population- {item.population} </div>
//                                 <div>Region- {item.region} </div>
//                                 <div>Timezones- {item.timezones} </div>
//                                 </div>

//                                 <div><img className={styles.flag} src={item.flags.svg}  height="auto" /></div>

//                              </div>

//            ))}
//         </div>
//       );
//     }
//   }

//   function PaginatedItems({ itemsPerPage }) {
//     const [currentItems, setCurrentItems] = useState(null);
//     const [pageCount, setPageCount] = useState(0);
//     const [itemOffset, setItemOffset] = useState(0);

//     useEffect(() => {

//       const endOffset = itemOffset + itemsPerPage;
//       console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//       setCurrentItems(items.slice(itemOffset, endOffset));
//       setPageCount(Math.ceil(items.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage]);

//     const handlePageClick = event => {
//       const newOffset = (event.selected * itemsPerPage) % items.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//       );
//       setItemOffset(newOffset);
//     };

//     return (
//       <>
//         <Items currentItems={currentItems} />
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//           className="pagination-link  pagination is-flex is-justify-content-space-evenly backWhite"
//         />
//       </>
//     );
//   }
//   return (
//     <>
//       <PaginatedItems itemsPerPage={5} />
//     </>
//   );

//   }
