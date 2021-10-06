import {H1} from './components/H1';
import { User } from './components/User';
import './App.css';
import { currentUser } from './components/helpers/user';

function App() {

  return (
    <div className="modal is-active is-clipped ">
      <H1/>
      <User user={currentUser} age bio />
      <User/>      

      
    </div>
  );
}

export default App;
