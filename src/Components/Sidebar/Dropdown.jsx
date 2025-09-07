import { useState, useEffect, useRef } from "react";
import expendMore from "../../assets/expand_more.png";

function Dropdown({ activeItem, navItems, handleClick }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const inactiveItems = navItems.filter((each) => each.id !== activeItem);
    const activeNavItem = navItems.filter((each) => each.id === activeItem);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="dropDown-container" ref={dropdownRef}>
            <div
                className="dropDown"
                style={
                    open
                        ? {
                              height: "240px",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                          }
                        : {
                              height: "30px",
                              boxShadow: "",
                          }
                }
            >
                {activeNavItem.map(({ id, label, icon: Icon }) => {
                    return (
                        <div
                            key={id}
                            className="current-item"
                            style={
                                open ? { height: "20%" } : { height: "100%" }
                            }
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <Icon color="#132450" />
                            <p>{label}</p>
                            <img
                                style={
                                    open
                                        ? { transform: "rotate(180deg)" }
                                        : { transform: "rotate(0deg)" }
                                }
                                src={expendMore}
                                alt="expand"
                            />
                        </div>
                    );
                })}

                {open ? (
                    <ul
                        style={open ? { height: "80%" } : { height: "" }}
                        className="option"
                        onClick={handleClick}
                    >
                        {inactiveItems.map(({ id, label, icon: Icon }) => {
                            return (
                                <li
                                    onClick={() => setOpen((prev) => !prev)}
                                    key={id}
                                    data-id={id}
                                >
                                    <Icon color="#132450" />
                                    <p>{label}</p>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Dropdown;
