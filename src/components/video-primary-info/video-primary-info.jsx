import "./video-primary-info.css"
// import { addToLikedVideos, removeFromLikedVideos } from "utils/apiCalls"
// import { useVideo } from "contexts/video-context"
import { useWatchLater } from "contexts/watch-later-context"
import { useLike, useVideo } from "contexts"

const VideoPrimaryInfo = ({videoDetails}) => {
    const {addToWatchLater} = useWatchLater()
    const {addToLikedVideos,removeFromLikedVideos} = useLike()
    const {state,dispatch} = useVideo()
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
            <button onClick={()=>addToWatchLater(videoDetails)} className="btn btn-with-icon">
                <i className="p1-right fa-solid fa-plus"></i>Save
            </button>
        </div>
    </div>
    </div>
    )
}

export {VideoPrimaryInfo}
