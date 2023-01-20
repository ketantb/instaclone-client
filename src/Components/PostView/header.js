import "../styles/header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <section className="header">
        <div className="header-body">
       <div className="header-icon-block">
        <img src="Assets/icon.jpg" className="instaclone-client-icon" alt="NA"/>
        <div className="instaclone-client-heading">instaclone-client</div>
       </div>
       <div className="header-camera-icon-block">
        <Link to='/post-form'>
        <img src="Assets/camera@2x.jpg" className="header-camera-icon"/>
        </Link>
       </div>
        </div>
        </section>
        </>
    )
}

export default Header;