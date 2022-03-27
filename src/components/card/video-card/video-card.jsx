import { useState, useEffect, useRef } from "react"
import "./video-card.css"

const VideoCard = ({videoDetails}) => {

    const [dropdown,setDropdown] = useState(false)
    const {title,creator,channelLogo,thumbnail,views,uploadTime,duration} = videoDetails

    const dropdownOptions = [
        {optionText:"Add to watch later",optionIcon:"clock"},
        {optionText:"Add to Playlist",optionIcon:"circle-play"},
        {optionText:"Remove from watch later",optionIcon:"trash"}]
    
    const settingRef = useRef()
    useEffect(()=>{
        document.addEventListener("mousedown",(e)=>{
            if(!settingRef.current?.contains(e.target)){
            setDropdown(false)}})
    })
    return (<div className="m1 card">
        <div>
            <img src={thumbnail} alt="croton" className="card-img" />
            <span className="text-badge">{duration}</span>
        </div>

        <div className="p1 card-text-container">
            <div className="card-heading flex-r">
                <img className="avatar-sm avatar" src={channelLogo} alt="user" />
                <div>
                    <p className="card-header">{title.length>60?`${title.substring(1,48)}...`:title}</p>
                </div>
            </div>
            <div className="card-footer">
                <div>
                    <div>{`${creator}`}</div>
                    <span>{`${views} views | ${uploadTime} ago`}</span>
                </div>
                <button ref={settingRef} onClick={()=>setDropdown((prev)=>!prev)} className="btn-icon1 btn footer-icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
        </div>

        {dropdown && <div className="list-non-bullet dropdown-section">
            {dropdownOptions.map(({optionText,optionIcon}) => 
            <li onClick={()=>setDropdown(prev=>!prev)} key={optionIcon} className="dropdown-item">
                <i className={`fa-solid fa-${optionIcon}`}></i>
                <span>{`${optionText}`}</span>
            </li>)}
        </div>} 
    </div>
    )
}

export {VideoCard}
