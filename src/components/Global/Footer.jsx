let date = new Date();
let year = date.getFullYear();

const Footer = () => {
    return (
        <div className="copyrightsec">
            <div className="container">
                <p>&copy; {year} Dentus. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;