import React, { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SidebarRow from './SidebarRow/SidebarRow';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExploreIcon from '@material-ui/icons/Explore';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./Sidebar.css";
function Sidebar() {
    const [selectedItem, setSelectedItem] = useState('Home')
    useEffect(() => {
        if (window.location.href.includes("Explore")) setSelectedItem('Explore');

    }, [])
    return (
        <div className="sidebar" onChange={e => console.log(e.target)}>
            <span onClick={e => setSelectedItem('Home')}><SidebarRow selected={selectedItem == "Home"} Icon={HomeIcon} title="Home" /></span>
            <span onClick={e => setSelectedItem('Explore')}><SidebarRow selected={selectedItem == "Explore"} Icon={ExploreIcon} title="Explore" /></span>
            <span onClick={e => setSelectedItem('Subscription')}><SidebarRow selected={selectedItem == "Subscription"} Icon={SubscriptionsIcon} title="Subscription" /></span>
            <hr />
            <span onClick={e => setSelectedItem('Library')}><SidebarRow selected={selectedItem == "Library"} Icon={VideoLibraryIcon} title="Library" /></span>
            <span onClick={e => setSelectedItem('History')}><SidebarRow selected={selectedItem == "History"} Icon={HistoryIcon} title="History" /></span>
            <span onClick={e => setSelectedItem('Your videos')}><SidebarRow selected={selectedItem == "Your videos"} Icon={OndemandVideoIcon} title="Your videos" /></span>
            <span onClick={e => setSelectedItem('Watch Later')}><SidebarRow selected={selectedItem == "Watch Later"} Icon={WatchLaterIcon} title="Watch Later" /></span>
            <span onClick={e => setSelectedItem('Liked videos')}><SidebarRow selected={selectedItem == "Liked videos"} Icon={ThumbUpAltOutlinedIcon} title="Liked videos" /></span>
            <SidebarRow onClick={e => setSelectedItem('Show more')} Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
