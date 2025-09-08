import "./Main.scss";

import group from "../../assets/group.png";

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
                    <img src={group} alt="Group" />
                    <span>ახლის გახსნა</span>
                </button>
            </div>
        </main>
    );
}

export default Main;
