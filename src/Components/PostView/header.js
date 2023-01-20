import "../styles/header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section className="header">
                <div className="header-body">
                    <Link to="/post-view" id=".txt-decor-none">
                        <div className="header-icon-block">
                            <img src="Assets/icon.jpg" className="instaclone-icon" alt="NA" />
                            <div className="instaclone-heading">instaclone</div>
                        </div>
                    </Link>
                    <div className="header-camera-icon-block">
                        <Link to='/post-form'>
                            <img src="Assets/camera@2x.jpg" className="header-camera-icon" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;