import { BrowserRouter } from 'react-router-dom';
import {NavBar} from './pages/SiteStaticComponents/NavBar/NavBar';
import './App.css'
import s from "./App.module.css";
import { Routes } from './Routes';
import { Footer } from './pages/SiteStaticComponents/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className={s.contentWrapper}>
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
