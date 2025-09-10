import clsx from "clsx";
import "./DesktopNavigation.scss";

function DesktopNavigation({
    isSidebarExpanded,
    isWideScreen,
    currentNav,
    navItems,
    handleNavItemClick,
    collapsed,
}) {
    return (
        <>
            {isWideScreen && (
                <nav>
                    <ul>
                        {navItems.map(({ id, href, label, icon: Icon }) => {
                            const isActive = currentNav === id;

                            const li_style = clsx({
                                active: isActive && isSidebarExpanded,
                                sidebar_Collapsed_active:
                                    isActive && !isSidebarExpanded,
                                li_collapsed: collapsed,
                            });

                            const a_style = clsx({
                                active_for_text: isActive,
                                a_collapsed: collapsed,
                            });

                            return (
                                <li
                                    key={id}
                                    data-id={id}
                                    className={li_style}
                                    onClick={(e) => handleNavItemClick(e, id)}
                                >
                                    <a href={href} className={a_style}>
                                        <Icon
                                            color={
                                                isActive ? "#132450" : "#FFFFFF"
                                            }
                                        />
                                        <p
                                            className={
                                                collapsed ? "p_collapes" : ""
                                            }
                                        >
                                            {label}
                                        </p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </>
    );
}

export default DesktopNavigation;
