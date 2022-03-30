import "./horizontal-video-card.css"
import { useVideo } from "contexts/video-context";
import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom";

const HorizontalVideoCard = ({videoDetails}) => {
    const {videoClickHandler} = useVideo();
    const [dropdown,setDropdown] = useState(false)
    const {_id,title,creator,thumbnail,views,uploadTime,duration,embedId} = videoDetails
    const navigate = useNavigate();

    const dropdownOptions = [
        {optionText:"Add to watch later",optionIcon:"clock"},
        {optionText:"Add to Playlist",optionIcon:"circle-play"},
        {optionText:"Remove from watch later",optionIcon:"trash"}]
    
    const settingRef = useRef()
    useEffect(()=>{
        document.addEventListener("mousedown",(e)=>{
            if(!settingRef.current?.contains(e.target)){
            setDropdown(false)}})
    },[dropdown])

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
                <p className="card-header">{title.length>60?`${title.substring(0,50)}...`:title}</p>
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
        
        {dropdown && <div className="list-non-bullet horizontal-dropdown-section">
            {dropdownOptions.map(({optionText,optionIcon}) => 
            <li onClick={()=>setDropdown(prev=>!prev)} key={optionIcon} className="dropdown-item">
                <i className={`fa-solid fa-${optionIcon}`}></i>
                <span>{`${optionText}`}</span>
            </li>)}
        </div>} 
    </div>
    )
}

export {HorizontalVideoCard}
