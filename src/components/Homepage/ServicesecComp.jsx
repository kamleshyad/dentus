import { ServicelistComp } from "../reusables/ServicelistComp";

const ServiceComp = () => {
    return (
        <div className="servicesec">
            <div className="sm-container">
                <h2>Enjoy all dental service <span>indentus chamber</span></h2>
                <p>The release sheets containing passages and more recently unchanged <span>easy versions release software.</span></p>
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
    )
}

export default ServiceComp;