import "./Sidebar.scss";
import { useState, useEffect } from "react";

import logo from "../../assets/logo.png";
import chevron from "../../assets/chevron.png";
import menu from "../../assets/menu.png";

function Sidebar() {
    const [width, setWidth] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <aside className="sidebar">
            <div className="sidebar__content">
                <div className="sidebar__header">
                    {/* Logo or branding */}
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>

                    {/* Toggle button */}
                    <div className="sidebar__toggle">
                        <button>
                            <img
                                src={width > 800 ? chevron : menu}
                                alt="Toggle sidebar"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
