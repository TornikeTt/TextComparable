import "./Profile.scss";
import dotsMenu from "../../../assets/dots-menu.png";

function Profile({ isSidebarExpanded, isWideScreen }) {
    if (!isWideScreen || !isSidebarExpanded) {
        return "";
    } else {
        return (
            <div className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <p>თ</p>
                    </div>
                    <p className="profile__name">თამარ ონიანი</p>
                </div>
                <img className="profile__menu-icon" src={dotsMenu} alt="Menu" />
            </div>
        );
    }
}

export default Profile;
