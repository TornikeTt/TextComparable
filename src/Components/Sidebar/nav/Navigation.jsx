import { useState } from "react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { navItems } from "./navItems";

function Navigation({ isWideScreen, collapsedStyles, isSidebarActive }) {
    const [currentNav, setCurrentNav] = useState("SpellingCheck");

    const handleNavItemClick = (e, id) => {
        e.preventDefault();
        setCurrentNav(id);
    };

    return (
        <>
            {isWideScreen ? (
                <DesktopNavigation
                    handleNavItemClick={handleNavItemClick}
                    navItems={navItems}
                    currentNav={currentNav}
                    collapsedStyles={collapsedStyles}
                    isSidebarActive={isSidebarActive}
                />
            ) : (
                <MobileNavigation
                    handleNavItemClick={handleNavItemClick}
                    navItems={navItems}
                    currentNav={currentNav}
                />
            )}
        </>
    );
}

export default Navigation;
