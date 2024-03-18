import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="headersec">
            <div className="container">
                <div className="logo">
                    <NavLink to="/"><img src="/images/logo.png" width="" height="" alt="logo" /></NavLink>
                </div>
                <div className="headerright">
                    <div className="topnav">
                        <Navbar />
                    </div>
                    <div className="appointmentbtn">
                        <NavLink to="#">Book and appointment</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;