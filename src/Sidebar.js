import { Chat, EmojiFlags, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlags} title='Page'/>
            <SidebarRow Icon={People} title='Friends'/>
            <SidebarRow Icon={Chat} title='Messenger'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={Storefront} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
