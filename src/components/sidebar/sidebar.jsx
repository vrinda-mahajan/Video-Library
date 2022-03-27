import { Link } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {

    const sidebarList = [
        {sidebarText:"Home",sidebarIcon:"house-chimney",route:'/'},
        {sidebarText:"Liked",sidebarIcon:"thumbs-up",route:'/liked'},
        {sidebarText:"Watch Later",sidebarIcon:"clock",route:'/watch-later'},
        {sidebarText:"Playlist",sidebarIcon:"circle-play",route:'/playlist'},
        {sidebarText:"History",sidebarIcon:"clock-rotate-left",route:'/history'},
    ]

    return (
        <aside className="sidebar-section">
            {sidebarList.map(({sidebarText,sidebarIcon,route})=>
             <Link to={route} key={sidebarText} className="sidebar-item">
             <i className={`fa-solid fa-${sidebarIcon}`}></i>
             <p>{sidebarText}</p>
            </Link>)}
        </aside> 
    )
}

export {Sidebar}
