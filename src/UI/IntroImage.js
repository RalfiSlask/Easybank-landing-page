import logoMobile from "../images/bg-intro-mobile.svg"
import logoDesktop from "../images/bg-intro-desktop.svg";
import logoMockups from "../images/image-mockups.png";

const IntroImage = ( {isDesktop} ) => {
    return ( 
        <div className="introimage--container">
            <img className="bg-intro" src={isDesktop ? logoDesktop : logoMobile} alt="company logo" />
            <img className="logo--markups" src={logoMockups} alt="mockups logo" />
        </div>
    );
}
 
export default IntroImage;