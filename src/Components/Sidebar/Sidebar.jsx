import Navigation from "./Navigation.jsx";
import Header from "./Header.jsx";
import "./Sidebar.scss";

import { useState, useEffect } from "react";

function Sidebar() {
    const [isSidebarActive, setIsSidebarActive] = useState(true);
    const [isWideScreen, setIsWideScreen] = useState(
        document.documentElement.clientWidth > 800
    );

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(document.documentElement.clientWidth > 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sidebarCollapsedStyles = {
        aside_style: () => {
            if (isSidebarActive || !isWideScreen) {
                return {};
            } else {
                return { maxWidth: "70px" };
            }
        },

        sidebar_content_style: () => {
            if (isSidebarActive || !isWideScreen) {
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

        sidebar_header_style: () => {
            if (isSidebarActive || !isWideScreen) {
                return {};
            } else {
                return {
                    header: {
                        marginTop: "20px",

                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    },

                    logo: {
                        marginTop: 0,
                        marginLeft: 0,
                    },

                    h1: {
                        display: "none",
                    },

                    sidebar_toggle: {
                        marginTop: 0,
                        marginRight: 0,
                    },

                    button: {
                        transform: "rotate(180deg)",
                    },
                };
            }
        },

        sidebar_navigation_style: () => {
            if (isSidebarActive || !isWideScreen) {
                return {};
            } else {
                return {
                    a: {
                        paddingLeft: 0,
                    },

                    li: {
                        width: "50px",
                        height: "50px",
                        justifyContent: "center",
                        borderRadius: "100%",
                    },

                    p: {
                        display: "none",
                    },
                };
            }
        },
    };

    return (
        <aside className="sidebar" style={sidebarCollapsedStyles.aside_style()}>
            <div
                className="sidebar__content"
                style={sidebarCollapsedStyles.sidebar_content_style()}
            >
                <Header
                    isWideScreen={isWideScreen}
                    setIsSidebarActive={setIsSidebarActive}
                    collapsedStyles={sidebarCollapsedStyles.sidebar_header_style()}
                />
                <Navigation
                    isWideScreen={isWideScreen}
                    isSidebarActive={isSidebarActive}
                    collapsedStyles={sidebarCollapsedStyles.sidebar_navigation_style()}
                />
            </div>
        </aside>
    );
}

export default Sidebar;
