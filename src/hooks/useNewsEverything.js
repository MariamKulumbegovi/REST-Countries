
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
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
      `${process.env.REACT_APP_API_URL_NEWS}q=apple&q=bitcoin&` +
        new URLSearchParams({
          apiKey: process.env.REACT_APP_API_KEY,
          pageSize: 100,
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

  function Items({ currentItems }) {
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
        <>
             <div className="mt-50 is-flex is-justify-content-start">
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

          {currentItems &&
            search(currentItems).map(item => (
              <div className="content">
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
                        <em className="has-text-danger">
                          Author: {item.author}
                        </em>
                      </div>
                      <div>
                        <time>PublishedAt:{item.publishedAt}</time>
                      </div>
                      <div>
                        <a className="has-text-danger" to={item.source.name}>
                          Source : {item.source.name}{' '}
                        </a>
                      </div>
                      <div>
                        Go directly to the post - <a> {item.url} </a>
                      </div>
                      <div className="has-text-is-danger is-justify-content-center is-flex">
                        <img src={item.urlToImage} width="70%" height="200px" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
        </>
      );
    }
  }

  function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = event => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
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
          className="pagination-link  pagination is-flex is-justify-content-space-evenly backWhite"
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
