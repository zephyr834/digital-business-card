import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/Info.css"

export default function Info() {
    return (
        <div className="content">
            <img src="" className="profile--pic" />
            <h1>Cory Eighan</h1>
            <p>Software Engineer</p>
            <div className="info--links" >
                <button className="btn--email">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    Email
                </button>
                <button className="btn--linkedin">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}