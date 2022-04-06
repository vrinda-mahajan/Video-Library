import "./liked.css"
import { VideoCard } from "components"
import { useEffect } from "react"
import { useLike, useVideo } from "contexts"
import { useDocumentTitle } from "custom hooks"

const Liked = () => {
    useDocumentTitle("Liked videos")
    const {state} = useVideo()
    const {getLikedVideos} = useLike()
    useEffect(()=>{
        getLikedVideos()
    },[])
    return(
        <div className="liked-video-section flex-r">
            {state.likedVideos.map((video)=><VideoCard key={video._id} videoDetails={video}/>)}
        </div>
    )
}

export {Liked}