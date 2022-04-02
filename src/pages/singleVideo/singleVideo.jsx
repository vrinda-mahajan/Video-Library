import { HorizontalVideoCard, VideoPrimaryInfo, YoutubeEmbed } from "components"
import { useVideo } from "contexts/video-context"
import "./singleVideo.css"

const SingleVideo = () => {
    const {state} = useVideo()
    const {videos,currentVideo} = state;
    const shuffeledArray = [...videos].sort(()=> 0.5-Math.random()).slice(0,7)

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
