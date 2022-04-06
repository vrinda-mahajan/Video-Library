import { PlaylistModal } from "components";
import { useHistory, useVideo, useWatchLater } from "contexts";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import "./video-card.css"

const VideoCard = ({videoDetails}) => {

    const location = useLocation();
    const {videoClickHandler} = useVideo();
    const {addToWatchLater,removeFromWatchLater} = useWatchLater();
    const {removeVideoFromHistory} = useHistory();
    const [dropdown,setDropdown] = useState(false);
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const {_id,title,creator,channelLogo,thumbnail,views,uploadTime,duration,embedId} = videoDetails
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
                    <p className="card-header">{title}</p>
                </div>
            </div>
            <div className="card-footer">
                <div>
                    <div>{`${creator}`}</div>
                    <span>{`${views} views | ${uploadTime} ago`}</span>
                </div>
                {location.pathname.includes("/history")
                ?<>
                <button title="Remove from history" onClick={()=>{removeVideoFromHistory(_id)}} className="btn-icon1 btn trash-icon">
                        <i className="fa-solid fa-trash-can"></i>
                </button>
                <button onClick={()=>{setDropdown(prev=>!prev)}} className="btn-icon1 btn footer-icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                </>
                :<button onClick={()=>{setDropdown(prev=>!prev)}} className="btn-icon1 btn footer-icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                }
                
            </div>
        </div>
            
        {dropdown && <div onClick={()=>{setDropdown(prev=>!prev)}} className="list-non-bullet dropdown-section">
            <li onClick={()=>addToWatchLater(videoDetails)} className="dropdown-item">
                <i className="fa-solid fa-clock"></i>
                <span>Add to watch later</span>
            </li>
            <li onClick={()=>setShowPlaylistModal(true)} className="dropdown-item">
                <i className="fa-solid fa-trash"></i>
                <span>Add to playlist</span>
            </li>
            <li onClick={()=>removeFromWatchLater(_id)} className="dropdown-item">
                <i className="fa-solid fa-trash"></i>
                <span>Remove from watch later</span>
            </li>
        </div>} 
        {showPlaylistModal && (
            <PlaylistModal
                handleModal={setShowPlaylistModal}
                video={videoDetails}
            />
            )}
    </div>
    )
}

export {VideoCard}
