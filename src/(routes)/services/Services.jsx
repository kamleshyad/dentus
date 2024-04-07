import { ServicelistComp } from "../../components/reusables/ServicelistComp";

const Services = () => {
    return (
        <div className="main-container">
            <div className="sm-container">
                <div className="serviceInnerpage">
                    <div className="servicelist">
                        <ul className="unset">
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                            <li><ServicelistComp /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;