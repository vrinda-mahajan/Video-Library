import { useVideo } from "../contexts/video-context"

const useFilteredVideos = () => {
    const {state} = useVideo()
    const {videos,selectedCategory} = state
    if (selectedCategory==="All"){
        return videos
    }
    else{
        const newlist=videos.filter((video)=>video.category===selectedCategory)
        return newlist
    }
}

export {useFilteredVideos}
