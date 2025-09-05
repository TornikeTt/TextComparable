import { useState } from "react";

import {
    CorrectSpelling,
    SpellingCheck,
    SpeechTotext,
    TextTospeech,
    PdfConvert,
} from "./svg";

function Navigation() {
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
        <nav>
            <ul onClick={handleClick}>
                {navItems.map(({ id, href, label, icon: Icon }) => {
                    const isActive = activeItem === id;
                    return (
                        <li
                            key={id}
                            data-id={id}
                            className={isActive ? "active" : ""}
                        >
                            <a
                                href={href}
                                className={isActive ? "active-for-text" : ""}
                            >
                                <Icon
                                    color={isActive ? "#132450" : "#FFFFFF"}
                                />
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navigation;
