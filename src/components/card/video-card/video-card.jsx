import { useVideo } from "contexts/video-context";
import { useWatchLater } from "contexts/watch-later-context";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { addToLikedVideos} from "utils/apiCalls";
import "./video-card.css"

// console.log(addToLikedVideos)
const VideoCard = ({videoDetails}) => {

    const {videoClickHandler} = useVideo();
    const {addToWatchLater,removeFromWatchLater} = useWatchLater()
    const [dropdown,setDropdown] = useState(false)
    const {title,creator,channelLogo,thumbnail,views,uploadTime,duration,embedId} = videoDetails
    const navigate = useNavigate();
    
    const clickHandler = () => {
        videoClickHandler(videoDetails)
        navigate(`/watch/${embedId}`)
    }

    return (<div className="m1 card text-decor-none">
        <div onClick={clickHandler}>
            <img src={thumbnail} alt={title} className="card-img" />
            <span className="text-badge">{duration}</span>
        </div>

        <div className="p1 card-text-container">
            <div className="card-heading flex-r">
                <img className="avatar-sm avatar" src={channelLogo} alt="user" />
                <div onClick={clickHandler}>
                    <p className="card-header">{title.length>60?`${title.substring(0,48)}...`:title}</p>
                </div>
            </div>
            <div className="card-footer">
                <div>
                    <div>{`${creator}`}</div>
                    <span>{`${views} views | ${uploadTime} ago`}</span>
                </div>
                <button onClick={()=>{setDropdown(prev=>!prev)}} className="btn-icon1 btn footer-icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
        </div>

        {dropdown && <div onClick={()=>{setDropdown(prev=>!prev)}} className="list-non-bullet dropdown-section">
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

export {VideoCard}
