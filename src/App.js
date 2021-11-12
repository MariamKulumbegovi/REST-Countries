import { Header, Footer } from './components/layout';
import './App.css';
import { Routes } from './Routes';

function App() {

  return (
    <div className="flex has-navbar-fixed-top scrollbar	">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
