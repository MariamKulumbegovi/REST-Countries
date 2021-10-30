import { useEffect } from 'react';
import { withNews } from '../../hoc';
import { Link } from 'react-router-dom';
import '../../css/News.css';

const News = ({ news }) => {
  useEffect(() => {}, [news]);
  console.log(news, 'news');
  return (
    <div className="container backColorDark margin-bottom ">
      <select className="sortBy my-3">
        <option value="popularity">popularity</option>
        <option value="relevancy">relevancy</option>
        <option value="publishedAt">publishedAt</option>
      </select>
      <div className=" is-justify-content-center">
        {/* <Search/> */}

        <div className="columns is-flex-direction-column ">
          {news.map(item => {
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
                      <Link className="has-text-danger" to="{item.source.name}">
                        Source : {item.source.name}{' '}
                      </Link>
                    </div>
                    <div>
                      Go directly to the post - <Link> {item.url} </Link>
                    </div>
                    <div className="has-text-is-danger is-justify-content-center is-flex">
                      <img src={item.urlToImage} width="70%" height="200px" />
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default withNews(News);
