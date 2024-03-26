import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Defineroutes from './(routes)/Defineroutes';
import Herosection from './components/Global/Herosection';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Header />
        <Herosection />
        <Defineroutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;