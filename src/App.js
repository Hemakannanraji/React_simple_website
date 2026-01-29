import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Service from './components/Service';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';

function App() {
  const btn = {
  backgroundColor: "#6dcde8ff",
  color: "white",
  padding: "8px 16px",
  textAlign: "center",
  textDecoration: "none", // removes underline
  borderRadius: "5px",
  margin: "5px",
  display: "inline-block"
};


  return (
    <div className="App">
      <br/>
      <BrowserRouter>

      <nav>
        <Link style={btn} to='/'>Home</Link>
        <Link style={btn} to='/products'>Products</Link>
        <Link style={btn} to='/service'>Service</Link>
        <Link style={btn} to='/clients'>Clients</Link>
        <Link style={btn} to='/portfolio'>Portfolio</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
