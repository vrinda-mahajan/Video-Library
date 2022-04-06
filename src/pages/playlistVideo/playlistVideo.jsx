import { VideoCard } from "components"
import { usePlaylist, useVideo } from "contexts"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import "./playlistVideo.css"

const PlaylistVideo = () => {
    const {playlistId} = useParams()
    const {state} = useVideo()
    const {getPlaylistData} = usePlaylist()

    useEffect(()=>{
        getPlaylistData(playlistId)
    },[])

    return (
        <div className="playlist-video-container">
        {state.currentPlaylist?.length>0
        ?<div>
            {state.currentPlaylist.map((video)=> <VideoCard key={video._id} videoDetails={video} />)}
        </div>
        :<h4 className="m2">There is no video in this playlist.</h4>}
        </div>
    )
}

export {PlaylistVideo}