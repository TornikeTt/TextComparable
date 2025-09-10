import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";

import expendMore from "../../../assets/expand_more.png";

import "./MobileNavigation.scss";

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
            <div className={clsx("dropDown", open && "dropDown_open_style")}>
                <div
                    key={selectedItem.id}
                    className={clsx(
                        "current-item",
                        open && "currentitem_open_style"
                    )}
                    onClick={toggleDropdown}
                >
                    <selectedItem.icon color="#132450" />
                    <p>{selectedItem.label}</p>
                    <img
                        className={open ? "arrowIcon_rotation" : ""}
                        src={expendMore}
                        alt="expand"
                    />
                </div>

                {open && (
                    <ul className={clsx("option", open && "ul_opne_style")}>
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
