import Home from './home/Home';
import About from './about-us/Aboutus';
import Service from './service/Service';
import Pages from './pages/Pages';
import Blog from './blog/Blog';
import Contact from './contact-us/Contact';

import { Routes, Route } from "react-router-dom";

const Defineroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us/" element={<About />} />
                <Route path="/services/" element={<Service />} />
                <Route path="/pages/" element={<Pages />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/contact/" element={<Contact />} />
            </Routes>
        </>
    )
}

export default Defineroutes;