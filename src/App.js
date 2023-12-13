import logo from './logo.svg';
import './App.css';
import { NavBarr } from './Components/NavBarr';
import { Banner } from './Components/Banner';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pcs from './Components/Pages/Pcs'
import Laptops from './Components/Pages/Laptops'
import Creditos from './Components/Pages/Creditos'
import Android from './Components/Pages/Android'
import Ios from './Components/Pages/Ios'
import Interaccion from './Components/Pages/Interaccion';
import Televisores from './Components/Pages/Televisores';
import Consolas from './Components/Pages/Consolas';
import Tablets from './Components/Pages/Tablets';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Banner />


      <Router>

        <Routes>
          <Route path="/android" element={<Android />} />
          <Route path="/ios" element={<Ios />} />
          <Route path="/pcs" element={<Pcs />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/televisores" element={<Televisores />} />
          <Route path="/consolas" element={<Consolas />} />
          <Route path="/interaccion" element={<Interaccion />} />
          
          <Route path="/creditos" element={<Creditos />} />
         

        </Routes>

      </Router>
      <Footer />

    </div>
  );
}


export default App;
