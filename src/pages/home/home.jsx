import "./home.css"
import { ChipContainer, VideoCard } from "components"
import { useDocumentTitle, useFilteredVideos } from "custom hooks"

const Home = () => {
    useDocumentTitle("Home")
    const filteredVideos = useFilteredVideos();
    
    return (
        <main className="container">
        <ChipContainer />
        <div className="video-container flex-r flex-wrap">
            {filteredVideos.map(
                (videoDetails) => <VideoCard key={videoDetails._id} videoDetails={videoDetails} />)}
        </div>
        </main>
    )
}

export {Home}
