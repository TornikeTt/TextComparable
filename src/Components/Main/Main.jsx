import "./Main.scss";

import newFileIcon from "../../assets/new-file-icon.png";

function Main() {
    return (
        <main>
            <div className="form-header">
                <div className="form-language">
                    <select name="language">
                        <option value="ka">ქართული</option>
                        <option value="en">English</option>
                    </select>

                    <label className="form-checkbox">
                        <input type="checkbox" />
                        <span>ფორმატის შენარჩუნება</span>
                    </label>
                </div>

                <button className="new-form">
                    <img src={newFileIcon} alt="Add new file" />
                    <span>ახლის გახსნა</span>
                </button>
            </div>

            <div className="compareText_container"></div>
        </main>
    );
}

export default Main;
