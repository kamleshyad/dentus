import { NavLink } from "react-router-dom"

export const ServicelistComp = () => {
    return (
        <div className="servicewrap">
            <div className="imgbox">
                <img src="/images/oral-surgery-icon.svg" width="70" height="70" alt="oral surgery icon" />
            </div>
            <h3>Oral Surgery</h3>
            <p className="summary">Release sheets containing passages more recently unchange easy versions and release software.</p>
            <NavLink to="#" className="viewbtn">Veiw Detail</NavLink>
        </div>
    )
}