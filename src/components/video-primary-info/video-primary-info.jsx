import "./video-primary-info.css"
import { useLike, useVideo } from "contexts"
import { PlaylistModal } from "components"
import { useState } from "react"

const VideoPrimaryInfo = ({videoDetails}) => {
    const {addToLikedVideos,removeFromLikedVideos} = useLike()
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const {state} = useVideo()
    const {_id,title} = videoDetails

    return(<div className="primary-info-section">
        <h5 className="primary-info-title">{title}</h5>
        <div className="flex-r">
        
        <div className="primary-info-btn">
            {state.likedVideos.find(item=>item._id===_id)
            ? <button onClick={()=>removeFromLikedVideos(_id)}  className="btn btn-with-icon">
                <i className="p1-right fas fa-thumbs-up"></i>Unlike
              </button>
            : <button onClick={()=>addToLikedVideos(videoDetails)}  className="btn btn-with-icon">
                <i className="p1-right far fa-thumbs-up"></i>Like
              </button>}
        </div>
        <div className="primary-info-btn">
            <button onClick={()=>setShowPlaylistModal(true)} className="btn btn-with-icon">
                <i className="p1-right fa-solid fa-plus"></i>Save
            </button>
        </div>
        {showPlaylistModal && (
            <PlaylistModal
                handleModal={setShowPlaylistModal}
                video={videoDetails}
            />
        )}
    </div>
    </div>
    )
}

export {VideoPrimaryInfo}
