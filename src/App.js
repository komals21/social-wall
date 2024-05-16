import { Route, Router, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/home.jsx';

function App() {
  return (
    <>
     <Routes>
    <Route path="/" element= {<Home/>}/>;
    </Routes>
    </>

  );
}

export default App;
