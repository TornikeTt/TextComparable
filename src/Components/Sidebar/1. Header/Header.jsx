import logo from "../../../assets/logo.png";
import chevron from "../../../assets/chevron.png";
import menu from "../../../assets/menu.png";

import "./Header.scss";
import { clsx } from "clsx";

function Header({ isWideScreen, setIsSidebarExpanded, collapsed }) {
    const handleToggle = () => {
        if (isWideScreen) setIsSidebarExpanded((prev) => !prev);
    };

    return (
        <div
            className={clsx("sidebar__header", collapsed && "header_collapsed")}
        >
            <div className={clsx("logo", collapsed && "logo_collapsed")}>
                <img src={logo} alt="Logo" />
                <h1 className={collapsed ? "h1_collapsed" : ""}>ENAGRAM</h1>
            </div>

            <div
                onClick={handleToggle}
                className={clsx(
                    "sidebar__toggle",
                    collapsed && "toggle_collapsed"
                )}
            >
                <button className={collapsed ? "button_collapsed" : ""}>
                    <img
                        src={isWideScreen ? chevron : menu}
                        alt="Toggle sidebar"
                    />
                </button>
            </div>
        </div>
    );
}

export default Header;
