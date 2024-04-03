import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Herosection = () => {
    let currentPath = useLocation();
    currentPath = currentPath.pathname;
    //console.log(currentPath)

    const [caption, setCaption] = useState("");

    const innerClass = (currentPath != "/") ? " innerbanner" : "";

    useEffect(() => {
        if (currentPath == '/about-us/') {
            setCaption("About Us");
        } else if (currentPath == '/services/') {
            setCaption("Services");
        } else if (currentPath == '/pages/') {
            setCaption("Pages");
        } else if (currentPath == '/blog/') {
            setCaption("Blog");
        } else if (currentPath == '/contact/') {
            setCaption("Contact")
        }
    }, [currentPath])

    if (currentPath == "/") {
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
    } else {
        return (
            <div className={'herosec' + innerClass}>
                <div className="container">
                    <h1>{caption}</h1>
                </div>
            </div>
        )
    }
}

export default Herosection;