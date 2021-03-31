import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/HomeRounded";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StoreFrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { Avatar } from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';




function Header() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png' alt="" />
                <div className='header__input'>
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active"><HomeIcon fontSize="large"/></div>
                <div className="header__option"><FlagIcon fontSize="large"/></div>
                <div className="header__option"><SubscriptionsOutlinedIcon fontSize="large"/></div>
                <div className="header__option"><StoreFrontOutlinedIcon fontSize="large"/></div>
                <div className="header__option"><SupervisedUserlinedIcon fontSize="large"/></div>
            </div>
            <div className="header__right">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
