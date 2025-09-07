import Dropdown from "./Dropdown";

import { useState } from "react";
import clsx from "clsx";

import {
    CorrectSpelling,
    SpellingCheck,
    SpeechTotext,
    TextTospeech,
    PdfConvert,
} from "./svg";

function Navigation({ isWideScreen, collapsedStyles, isSidebarActive }) {
    const [activeItem, setActiveItem] = useState("SpellingCheck");

    const navItems = [
        {
            id: "CorrectSpelling",
            href: "/correct-spelling",
            label: "მართლწერი",
            icon: CorrectSpelling,
        },
        {
            id: "SpellingCheck",
            href: "/spelling-check",
            label: "ტექსტის შედარება",
            icon: SpellingCheck,
        },
        {
            id: "SpeechTotext",
            href: "/speech-to-text",
            label: "ხმა ტექსტი",
            icon: SpeechTotext,
        },
        {
            id: "TextTospeech",
            href: "/text-to-speech",
            label: "ტექსტი ხმა",
            icon: TextTospeech,
        },
        {
            id: "PdfConvert",
            href: "/pdf-convert",
            label: "PDF კონვერტაცია",
            icon: PdfConvert,
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();

        const li = e.target.closest("li");
        const key = li.dataset.id;
        setActiveItem(key);
    };

    return (
        <>
            {isWideScreen ? (
                <nav>
                    <ul onClick={handleClick}>
                        {navItems.map(({ id, href, label, icon: Icon }) => {
                            const isActive = activeItem === id;

                            const listItemClass = clsx({
                                active: isActive && isSidebarActive,
                                sidebar_Collapsed_active:
                                    isActive && !isSidebarActive,
                            });

                            return (
                                <li
                                    key={id}
                                    data-id={id}
                                    className={listItemClass}
                                    style={collapsedStyles.li}
                                >
                                    <a
                                        href={href}
                                        className={
                                            isActive ? "active-for-text" : ""
                                        }
                                        style={collapsedStyles.a}
                                    >
                                        <Icon
                                            color={
                                                isActive ? "#132450" : "#FFFFFF"
                                            }
                                        />
                                        <p style={collapsedStyles.p}>{label}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            ) : (
                <Dropdown
                    handleClick={handleClick}
                    navItems={navItems}
                    activeItem={activeItem}
                />
            )}
        </>
    );
}

export default Navigation;
