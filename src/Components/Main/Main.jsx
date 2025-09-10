import "./Main.scss";
import newComparisonIcon from "../../assets/new-file-icon.png";
import comparisonArrowIcon from "../../assets/bidirectional arrow.png";

function Main() {
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

                    <button className="newComparisonButton">
                        <img
                            src={newComparisonIcon}
                            alt="Start new comparison"
                        />
                        <span>ახლის გახსნა</span>
                    </button>
                </div>

                <div className="textComparisonArea">
                    <textarea placeholder="დაიწყე წერა..."></textarea>
                    <img src={comparisonArrowIcon} alt="Compare text" />
                    <textarea placeholder="დაიწყე წერა..."></textarea>
                </div>

                <button className="compareButton">შედარება</button>
            </div>
        </main>
    );
}

export default Main;
