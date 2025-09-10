import { useState } from "react";
import { diffChars } from "diff";
import clsx from "clsx";

import newComparisonIcon from "../../assets/new-file-icon.png";
import comparisonArrowIcon from "../../assets/bidirectional arrow.png";
import tryagain from "../../assets/tryagain.png";

import "./Main.scss";

function Main() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [isCompared, setIsCompared] = useState(false);

    const [highlightedText1, setHighlightedText1] = useState([]);
    const [highlightedText2, setHighlightedText2] = useState([]);

    const handleCompare = () => {
        setIsCompared(text1.length > 0 && text2.length > 0);

        const diffParts = diffChars(text1, text2);

        const text1Spans = [];
        const text2Spans = [];

        diffParts.forEach((diffPart, index) => {
            const spanElement = (
                <span
                    key={index}
                    className={clsx({
                        "textComparison--added": diffPart.added,
                        "textComparison--deleted": diffPart.removed,
                    })}
                >
                    {diffPart.value}
                </span>
            );

            if (diffPart.added) {
                text2Spans.push(spanElement);
            } else if (diffPart.removed) {
                text1Spans.push(spanElement);
            } else {
                text1Spans.push(spanElement);
                text2Spans.push(spanElement);
            }
        });

        setHighlightedText1(text1Spans);
        setHighlightedText2(text2Spans);
    };

    const reset = () => {
        setIsCompared(false);
        setText1("");
        setText2("");
    };

    return (
        <main>
            <div className="container">
                <div className="comparisonFormHeader">
                    <div className="languageSelector">
                        <select name="language">
                            <option value="ka">ქართული</option>
                            <option value="en">English</option>
                        </select>

                        <label>
                            <input type="checkbox" />
                            <span>ფორმატის შენარჩუნება</span>
                        </label>
                    </div>

                    <button className="newComparisonButton" onClick={reset}>
                        <img
                            src={newComparisonIcon}
                            alt="Start new comparison"
                        />
                        <span>ახლის გახსნა</span>
                    </button>
                </div>

                <div className="textComparisonArea">
                    {isCompared ? (
                        <div> {highlightedText1}</div>
                    ) : (
                        <textarea
                            placeholder="დაიწყე წერა..."
                            value={text1}
                            onChange={(e) => setText1(e.target.value)}
                        />
                    )}
                    <img src={comparisonArrowIcon} alt="Compare text" />

                    {isCompared ? (
                        <div> {highlightedText2}</div>
                    ) : (
                        <textarea
                            placeholder="დაიწყე წერა..."
                            value={text2}
                            onChange={(e) => setText2(e.target.value)}
                        />
                    )}
                </div>

                <button
                    className="compareButton"
                    onClick={isCompared ? reset : handleCompare}
                >
                    {isCompared && <img src={tryagain} />}
                    შედარება
                </button>
            </div>
        </main>
    );
}

export default Main;
