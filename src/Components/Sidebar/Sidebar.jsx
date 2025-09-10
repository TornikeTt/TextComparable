import { useState, useEffect } from "react";

import Header from "./1. Header/Header.jsx";
import DesktopNavigation from "./2. DesktopNavigation/DesktopNavigation.jsx";
import MobileNavigation from "./DropdownMenu/MobileNavigation.jsx";

import { navItems } from "./navItems.jsx";
import "./Sidebar.scss";

function Sidebar() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [isWideScreen, setIsWideScreen] = useState(
        document.documentElement.clientWidth > 800
    );
    const [currentNav, setCurrentNav] = useState("SpellingCheck");

    const collapsed = !isSidebarExpanded && isWideScreen;

    const handleNavItemClick = (e, id) => {
        e.preventDefault();
        setCurrentNav(id);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(document.documentElement.clientWidth > 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sidebarCollapsedStyles = {
        aside_style: () => {
            if (isSidebarExpanded || !isWideScreen) {
                return {};
            } else {
                return { width: "70px" };
            }
        },

        DesktopSideBar_content_style: () => {
            if (isSidebarExpanded || !isWideScreen) {
                return {};
            } else {
                return {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                };
            }
        },
    };

    return (
        <aside className="sidebar" style={sidebarCollapsedStyles.aside_style()}>
            <div className="DesktopSideBar">
                <div
                    className="DesktopSideBar_content"
                    style={sidebarCollapsedStyles.DesktopSideBar_content_style()}
                >
                    <Header
                        setIsSidebarExpanded={setIsSidebarExpanded}
                        isWideScreen={isWideScreen}
                        collapsed={collapsed}
                    />

                    <DesktopNavigation
                        isSidebarExpanded={isSidebarExpanded}
                        isWideScreen={isWideScreen}
                        currentNav={currentNav}
                        navItems={navItems}
                        handleNavItemClick={handleNavItemClick}
                        collapsed={collapsed}
                    />
                </div>
            </div>
            <div className="MobileSideBar">
                <MobileNavigation
                    currentNav={currentNav}
                    navItems={navItems}
                    handleNavItemClick={handleNavItemClick}
                />
            </div>
        </aside>
    );
}

export default Sidebar;
