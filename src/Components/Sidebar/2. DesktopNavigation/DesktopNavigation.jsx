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
                        {navItems.map((props) => {
                            const {
                                id,
                                href,
                                label,
                                icon: Icon,
                                arrowRight: ArrowRight,
                            } = props;

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

                            const newlabel = () => {
                                const arrow = ArrowRight && (
                                    <ArrowRight
                                        color={isActive ? "#132450" : "#FFFFFF"}
                                    />
                                );

                                if (arrow) {
                                    const parts = label.split(" ");
                                    return (
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "4px",
                                            }}
                                        >
                                            {parts[0]} {arrow} {parts[1]}
                                        </span>
                                    );
                                }
                                return label;
                            };

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
                                            className={clsx(
                                                collapsed && "p_collapes"
                                            )}
                                        >
                                            {newlabel()}
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
