import InfoLinks from "./InfoLinks"
import ProfilePhoto from "./../../assets/cat-with-glasses.png";
import "./../../styles/Info.css"

export default function Info() {

    return (
        <>
            <img src={ProfilePhoto} alt="cat-with-glasses" className="profile--pic" />
            <div className="content">
                <h1 className="name">Cory Eighan</h1>
                <p className="career">Software Engineer</p>
                <p className="email">coryeighan834@gmail.com</p>
                <InfoLinks />
            </div>
            
        </>
    )
}