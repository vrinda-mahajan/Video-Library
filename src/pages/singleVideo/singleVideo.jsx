import { HorizontalVideoCard, VideoPrimaryInfo, YoutubeEmbed } from "components"
import { useHistory, useVideo } from "contexts"
import { useEffect } from "react"
import "./singleVideo.css"

const SingleVideo = () => {
    const {state} = useVideo()
    const {videos,currentVideo} = state;
    const {addVideoToHistory} = useHistory()
    const shuffeledArray = [...videos].sort(()=> 0.5-Math.random()).slice(0,7)

    useEffect(()=>{
        if(currentVideo._id){
        addVideoToHistory(currentVideo)}
    },[currentVideo])
    
    return (
        <>
        <main className="flex-r single-video-container">
        <div>
            <YoutubeEmbed embedId={currentVideo.embedId}/>
            <VideoPrimaryInfo videoDetails={currentVideo}/>
        </div>
        <div>
        {shuffeledArray.map((videoDetails)=><HorizontalVideoCard key={videoDetails._id} videoDetails={videoDetails} />)}
        </div>
        </main>
        </>
    )
}

export {SingleVideo};
