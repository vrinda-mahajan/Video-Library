import "./shrinked-sidebar.css"
import { Link } from "react-router-dom"

const ShrinkedSidebar = () => {
    const sidebarList = [
        {sidebarText:"Home",sidebarIcon:"house-chimney",route:'/'},
        {sidebarText:"Liked",sidebarIcon:"thumbs-up",route:'/liked'},
        {sidebarText:"Watch Later",sidebarIcon:"clock",route:'/watch-later'},
        {sidebarText:"Playlist",sidebarIcon:"circle-play",route:'/playlist'},
        {sidebarText:"History",sidebarIcon:"clock-rotate-left",route:'/history'},
    ]

    return (
        <aside className="shrinked-sidebar-section">
            {sidebarList.map(({sidebarText,sidebarIcon,route})=>
             <Link to={route} key={route} className="flex-c center shrinked-sidebar-item">
             <i className={`fa-solid fa-${sidebarIcon}`}></i>
             <span className="sidebar-icon-text">{sidebarText}</span>
            </Link>)}
        </aside> 
    )
}

export {ShrinkedSidebar}
