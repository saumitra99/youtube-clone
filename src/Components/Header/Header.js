import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import YoutubeLogo from '../../media/YouTube_Logo_2017.svg'
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src={YoutubeLogo}
                    // src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt=""
                />
            </div>
            <div className="header__input">
                <input placeholder="Serving notice period" type="text" />
                <SearchIcon className="header__inputButton" />
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <Avatar
                    alt="saumitra"
                    src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                />
            </div>


        </div>
    )
}

export default Header
