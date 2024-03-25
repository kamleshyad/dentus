import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="unset">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Home</NavLink></li>
            <li><NavLink to="/about-us/" className={({ isActive }) => (isActive ? "active" : "inactive")}>About Us</NavLink></li>
            <li><NavLink to="/services/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Service</NavLink></li>
            <li><NavLink to="/pages/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Pages</NavLink></li>
            <li><NavLink to="/blog/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Blog</NavLink></li>
            <li><NavLink to="/contact/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Contact</NavLink></li>
        </ul >
    )
}

export default Navbar;