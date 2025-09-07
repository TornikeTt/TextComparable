import { useState, useEffect, useRef } from "react";
import expendMore from "../../../assets/expand_more.png";

function Dropdown({ currentNav, navItems, handleNavItemClick }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const selectedItem = navItems.find((each) => each.id === currentNav);
    const dropdownOptions = navItems.filter((each) => each.id !== currentNav);

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

    const style = {
        dropdown: () => {
            if (open) {
                return {
                    height: "240px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                };
            } else {
                return {
                    height: "30px",
                    boxShadow: "",
                };
            }
        },
        currentItem: open ? { height: "20%" } : { height: "100%" },

        arrowImage: open
            ? { transform: "rotate(180deg)" }
            : { transform: "rotate(0deg)" },

        ul: open ? { height: "80%" } : { height: "" },
    };

    const toggleDropdown = (e, id) => {
        if (e && id) {
            handleNavItemClick(e, id);
            setOpen((prev) => !prev);
        } else {
            setOpen((prev) => !prev);
        }
    };

    return (
        <div className="dropDown-container" ref={dropdownRef}>
            <div className="dropDown" style={style.dropdown()}>
                <div
                    key={selectedItem.id}
                    className="current-item"
                    style={style.currentItem}
                    onClick={toggleDropdown}
                >
                    <selectedItem.icon color="#132450" />
                    <p>{selectedItem.label}</p>
                    <img
                        style={style.arrowImage}
                        src={expendMore}
                        alt="expand"
                    />
                </div>

                {open && (
                    <ul style={style.ul} className="option">
                        {dropdownOptions.map(({ id, label, icon: Icon }) => {
                            return (
                                <li
                                    onClick={(e) => toggleDropdown(e, id)}
                                    key={id}
                                    data-id={id}
                                >
                                    <Icon color="#132450" />
                                    <p>{label}</p>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Dropdown;
