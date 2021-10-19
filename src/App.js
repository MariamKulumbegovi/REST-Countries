import { Header,  Footer } from './components/layout';
import './App.css';
import { Routes } from './Routes';


function App() {

  return (
    <div className="flex 	">
      <Header/>
      <Routes/>
      <Footer/>


      
    </div>
  );
}

export default App;
