import "./watchLater.css"
import { VideoCard } from "components"
import { useVideo,useWatchLater } from "contexts"
import { useEffect } from "react"
import { useDocumentTitle } from "custom hooks"

const WatchLater = () => {
    useDocumentTitle("Watch Later")
    const {state} = useVideo()
    const {getWatchLaterVideos} = useWatchLater()
    useEffect(()=>{
        getWatchLaterVideos()
    },[])
    return(
        <div className="watch-later-section flex-r">
            {state.watchLaterVideos.map((video)=><VideoCard key={video._id} videoDetails={video}/>)}
        </div>
    )
}

export {WatchLater}