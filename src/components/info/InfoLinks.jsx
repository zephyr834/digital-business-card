import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../../styles/InfoLinks.css"


export default function InfoLinks() {
    return (
        <div className="info--links" >
            <a href="mailto:coryeighan834@gmail.com" className="email--link">
                <button>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="icon"/>
                    Email
                </button>
            </a>
            <a href="https://www.linkedin.com/in/cory-eighan-88153030/" target="_blank" >
                <button className="linkedin--button">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon" />
                    LinkedIn
                </button>
            </a>
        </div>
    )
}