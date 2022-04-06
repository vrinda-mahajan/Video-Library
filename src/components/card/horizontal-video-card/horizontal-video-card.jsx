import "./horizontal-video-card.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useVideo, useWatchLater } from "contexts";

const HorizontalVideoCard = ({videoDetails}) => {

    const {videoClickHandler} = useVideo();
    const {addToWatchLater,removeFromWatchLater} = useWatchLater()
    const [dropdown,setDropdown] = useState(false)
    const {_id,title,creator,thumbnail,views,uploadTime,duration,embedId} = videoDetails
    const navigate = useNavigate();
    
    const clickHandler = () => {
        videoClickHandler(videoDetails)
        navigate(`/watch/${_id}`)
    }

    return (<div className="m1 card horizontal-card text-decor-none">
        <div className="flex-r">
            <Link to={`/watch/${embedId}`} onClick={clickHandler}>
                <div>
                    <img src={thumbnail} alt={title} className="horizontal-card-img" />
                    <span className="horizontal-text-badge">{duration}</span>
                </div>
            </Link>
            <div>
            <Link to={`/watch/${embedId}`} onClick={clickHandler} className="text-decor-none">
                <p className="card-header">{title}</p>
            </Link>
                <div className="card-footer">
                    <div>
                        <div>{`${creator}`}</div>
                        <span>{`${views} views | ${uploadTime} ago`}</span>
                    </div>
                    <button onClick={()=>setDropdown((prev)=>!prev)} className="btn-icon1 btn footer-icon">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>
        </div>
        
        {dropdown && <div onClick={()=>{setDropdown(prev=>!prev)}} className="list-non-bullet horizontal-dropdown-section">
            <li onClick={()=>addToWatchLater(videoDetails)} className="dropdown-item">
                <i className="fa-solid fa-clock"></i>
                <span>Add to watch later</span>
            </li>
            <li onClick={()=>removeFromWatchLater(videoDetails._id)} className="dropdown-item">
                <i className="fa-solid fa-trash"></i>
                <span>Remove from watch later</span>
            </li>
        </div>} 
    </div>
    )
}

export {HorizontalVideoCard}
