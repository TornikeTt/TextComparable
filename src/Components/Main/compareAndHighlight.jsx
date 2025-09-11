import { diffChars } from "diff";
import clsx from "clsx";

function compareAndHighlight(firstText, secondText) {
    const diffParts = diffChars(firstText, secondText);

    const first = [];
    const second = [];

    diffParts.forEach((part, index) => {
        const span = (
            <span
                key={index}
                className={clsx({
                    "textComparison--added": part.added,
                    "textComparison--deleted": part.removed,
                })}
            >
                {part.value}
            </span>
        );

        if (part.added) {
            second.push(span);
        } else if (part.removed) {
            first.push(span);
        } else {
            first.push(span);
            second.push(span);
        }
    });

    return { first, second };
}

export { compareAndHighlight };
