import clsx from "clsx";

function DesktopNavigation({
    handleNavItemClick,
    navItems,
    currentNav,
    collapsedStyles,
    isSidebarActive,
}) {
    return (
        <nav>
            <ul>
                {navItems.map(({ id, href, label, icon: Icon }) => {
                    const isActive = currentNav === id;

                    const listItemClass = clsx({
                        active: isActive && isSidebarActive,
                        sidebar_Collapsed_active: isActive && !isSidebarActive,
                    });

                    return (
                        <li
                            key={id}
                            data-id={id}
                            className={listItemClass}
                            style={collapsedStyles.li}
                            onClick={(e) => handleNavItemClick(e, id)}
                        >
                            <a
                                href={href}
                                className={isActive ? "active-for-text" : ""}
                                style={collapsedStyles.a}
                            >
                                <Icon
                                    color={isActive ? "#132450" : "#FFFFFF"}
                                />
                                <p style={collapsedStyles.p}>{label}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default DesktopNavigation;
