import { useEffect } from 'react/cjs/react.development';
import starryNight from '../../img/starryNight.jpg';
import '../../App.css';

export const Home = ({ colors }) => {
  // useEffect(() => {}, [colors]);
  console.log(colors);
  return (
    <div>
      <div>
        <img src={starryNight} width="100%" height="100vh" />
      </div>
    </div>
  );
};

