import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Info() {
    return (
        <>
            <h1>Cory Eighan</h1>
            <p>Software Engineer</p>
            <button className="btn-email">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                Email
            </button>
            <button className="btn-email">
                <img src="" className="email-icon" />
                LinkedIn
            </button>
        </>
    )
}