import {
    CorrectSpelling,
    SpellingCheck,
    SpeechTotext,
    TextTospeech,
    PdfConvert,
    ArrowRight,
} from "./svg";

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
        arrowRight: ArrowRight,
    },
    {
        id: "TextTospeech",
        href: "/text-to-speech",
        label: "ტექსტი ხმა",
        icon: TextTospeech,
        arrowRight: ArrowRight,
    },
    {
        id: "PdfConvert",
        href: "/pdf-convert",
        label: "PDF კონვერტაცია",
        icon: PdfConvert,
    },
];

export { navItems };
