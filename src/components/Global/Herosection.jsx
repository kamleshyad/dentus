import { NavLink } from "react-router-dom";

const Herosection = () => {
    return (
        <div className="herosec">
            <div className="container">
                <div className="herobox">
                    <div className="heroleft">
                        <h1>Come to dentus <span>and solve your</span> <span>teeth problem.</span></h1>
                        <p>The release sheets contain passages and more recently <span> unchanged versions release software.</span></p>
                        <div className="bannerbtn">
                            <NavLink href="/services/" className="secondarybtn">Dental Solution</NavLink>
                        </div>
                    </div>
                    <div className="heroright">
                        <div className="imgbox">
                            <img src="/images/banner-img.png" width="633" height="483" alt="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection;