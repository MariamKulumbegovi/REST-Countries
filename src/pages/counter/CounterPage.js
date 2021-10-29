import { Counter } from '../../components/counter';
import { withUserList } from '../../hoc';
import { useFetch } from '../../hooks';
import '../../App.css';

const values = [1];

const CounterPage = ({ userList }) => {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

  const postsData = posts.data;
  // console.log(postsData)

  const items = [
    { id: 1, title: 'mari' },
    { id: 1, title: 'mari' },
    { id: 1, title: 'mari' },
  ];

  if (posts.loading) {
    return <h2 className="strong">Loading...</h2>;
  }

  return (
    <div className="section is-medium">
      <div className="columns">
        {/* {items.map(item=>{
        return (
           <div className="column strong" key={item.id}>{item.title}</div>
       
        )
      })} */}
      </div>
      <div>
        {values.map(item => {
          return <Counter initialValue={item} key={`item-${item}`} />;
        })}
      </div>
      <div className="content box is-flex-wrap-wrap is-justify-content-center is-align-items-center">
        {userList.map(item => {
          return (
            <div className=" box" key={item.id}>
              <em>{item.email}</em>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default withUserList(CounterPage);
