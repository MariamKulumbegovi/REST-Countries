import { useEffect } from 'react/cjs/react.development';
import { withTest } from '../../hoc/withTest';
import starryNight from '../../img/starryNight.jpg';
import '../../App.css';

const Home = ({ colors }) => {
  // useEffect(() => {}, [colors]);
  console.log(colors);
  return (
    <div>
      <div>
        <img src={starryNight} width="100%" height="100vh" />
      </div>
      <div className="box">
        <h1>Colors:</h1>
        {/* {colors.map(item => {
          return <div key={item.id}>{item.name}, </div>;
        })} */}
      </div>
    </div>
  );
};

export default withTest(Home);
