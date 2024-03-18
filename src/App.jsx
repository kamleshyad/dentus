import Home from './(routes)/home/Home';
import About from './(routes)/about-us/Aboutus';
import Service from './(routes)/service/Service';
import Pages from './(routes)/pages/Pages';
import Blog from './(routes)/blog/Blog';
import Contact from './(routes)/contact-us/Contact';

import Header from './components/Global/Header';
import Footer from './components/Global/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/service/" element={<Service />} />
          <Route path="/pages/" element={<Pages />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;