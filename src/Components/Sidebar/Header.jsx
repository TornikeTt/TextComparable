import logo from "../../assets/logo.png";
import chevron from "../../assets/chevron.png";
import menu from "../../assets/menu.png";

function Header({ isWideScreen, setIsSidebarActive, collapsedStyles }) {
    const handleToggle = () => {
        setIsSidebarActive((prev) => !prev);
    };

    return (
        <div className="sidebar__header" style={collapsedStyles.header}>
            {/* Logo or branding */}
            <div className="logo" style={collapsedStyles.logo}>
                <img src={logo} alt="Logo" />
                <h1 style={collapsedStyles.h1}>ENAGRAM</h1>
            </div>

            {/* Toggle button */}
            <div
                className="sidebar__toggle"
                style={collapsedStyles.sidebar_toggle}
                onClick={handleToggle}
            >
                <button style={collapsedStyles.button}>
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
