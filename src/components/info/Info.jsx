import InfoLinks from "./InfoLinks"
import ProfilePhoto from "./../../assets/cat-with-glasses.png";
import "./../../styles/Info.css"

export default function Info() {

    return (
        <div className="content">
            <img src={ProfilePhoto} alt="cat-with-glasses" className="profile--pic" />
            <div className="description">
                <h1 className="name">Cory Eighan</h1>
                <p className="position">Software Engineer</p>
                <p>coryeighan834@gmail.com</p>
            </div>
            <InfoLinks />
        </div>
    )
}