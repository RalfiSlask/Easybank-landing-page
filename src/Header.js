import { useState } from "react";
import Navbar from "./UI/Navbar";
import InviteButton from "./UI/InviteButton";
import easybankLogo from "./images/logo.svg";
import SidebarButton from "./SidebarButton";
import Sidebar from "./UI/Sidebar";

const Header = ( {isDesktop} ) => {
    const [isSidebarButtonClicked, setSidebarButtonClicked] = useState(false);

    const handleClickOnSidebarButton = () => {
        setSidebarButtonClicked(!isSidebarButtonClicked);
    };

    return ( 
        <>
        <header>
            <div className="header--container">
                <img src={easybankLogo} alt="easybank" />
                {isDesktop && <Navbar />}
                {isDesktop ? <InviteButton /> : <SidebarButton onClick={handleClickOnSidebarButton} isClicked={isSidebarButtonClicked}/>}
            </div>
        </header>
        {isSidebarButtonClicked && !isDesktop ? <Sidebar /> : null}

        </>
     );
}
 
export default Header;