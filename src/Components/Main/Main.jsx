import { useState, useEffect } from "react";
import { compareAndHighlight } from "./compareAndHighlight";
import Loading from "./Loading";

import newComparisonIcon from "../../assets/new-file-icon.png";
import comparisonArrowIcon from "../../assets/bidirectional arrow.png";
import tryagain from "../../assets/tryagain.png";

import "./Main.scss";

function Main() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [isCompared, setIsCompared] = useState(false);
    const [loading, setLoading] = useState(false);

    const [highlightedText1, setHighlightedText1] = useState([]);
    const [highlightedText2, setHighlightedText2] = useState([]);

    const handleCompare = () => {
        const isTextFilled = text1.length > 0 && text2.length > 0;

        setIsCompared(isTextFilled);
        setLoading(isTextFilled);

        if (!text1 && !text2) {
            return;
        } else {
            const { first, second } = compareAndHighlight(text1, text2);

            setHighlightedText1(first);
            setHighlightedText2(second);
        }
    };

    const reset = () => {
        setIsCompared(false);
        setText1("");
        setText2("");
    };

    const compearButtonHender = () => {
        if (isCompared) {
            reset();
        } else {
            handleCompare();
        }
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

                {loading ? (
                    <Loading start={loading} setLoading={setLoading} />
                ) : (
                    <div className="textComparisonArea">
                        {isCompared ? (
                            <div>{highlightedText1}</div>
                        ) : (
                            <textarea
                                placeholder="დაიწყე წერა..."
                                value={text1}
                                onChange={(e) => setText1(e.target.value)}
                            />
                        )}
                        <img src={comparisonArrowIcon} alt="Compare text" />

                        {isCompared ? (
                            <div>{highlightedText2}</div>
                        ) : (
                            <textarea
                                placeholder="დაიწყე წერა..."
                                value={text2}
                                onChange={(e) => setText2(e.target.value)}
                            />
                        )}
                    </div>
                )}

                <button
                    className="compareButton"
                    onClick={compearButtonHender}
                    disabled={loading ? true : false}
                    style={loading ? { backgroundColor: "#383A4899" } : {}}
                >
                    {!loading && isCompared && <img src={tryagain} />}
                    შედარება
                </button>
            </div>
        </main>
    );
}

export default Main;
