import { ReactComponent as LogoCompany} from "../images/logo-footer.svg";
import { ReactComponent as LogoFacebook } from "../images/icon-facebook.svg";
import { ReactComponent as LogoYoutube } from "../images/icon-youtube.svg";
import { ReactComponent as LogoTwitter} from "../images/icon-twitter.svg";
import { ReactComponent as LogoPinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as LogoInstagram } from "../images/icon-instagram.svg";

const Footer = () => {
    return ( 
        <>
                <LogoCompany className="company--logo"/>
            <div className="socialmedia--container">
                <LogoFacebook className="social-media-icon"/>
                <LogoYoutube className="social-media-icon"/>
                <LogoTwitter className="social-media-icon"/>
                <LogoPinterest className="social-media-icon"/>
                <LogoInstagram className="social-media-icon"/>
            </div>
            <ul className="footer--navbar">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
            <button className="button--invite button--footer">Request Invite</button>
            <div className="reserved">© Easybank. All Rights Reserved</div>
        </>
     );
}
 
export default Footer;