import closeButton from "./images/icon-close.svg";
import openButton from "./images/icon-hamburger.svg";

const SidebarButton = ( {onClick, isClicked} ) => {

    return ( 
        <>
        {isClicked ? <img className="sidebar--close"src={closeButton} alt="close" onClick={onClick}/> 
        : <img className="sidebar--open"src={openButton} alt="close" onClick={onClick}/>}
        </>
     );
}
 
export default SidebarButton;