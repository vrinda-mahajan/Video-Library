import { VideoCard } from "components"
import { useHistory, useVideo } from "contexts"
import { useEffect } from "react"
import "./history.css"

const History = () => {
    const {state} = useVideo()
    const {getHistory,clearHistory} =useHistory()
    useEffect(()=>{
        getHistory()
    },[])
    return (
    <div className="history-container center flex-c">
        <button onClick={clearHistory} className="btn btn-with-icon">
            <i className="p1-right fa-solid fa-trash-can"></i>Clear History
        </button>
        <div className="flex-r flex-wrap">
            {state.history.map((video)=><VideoCard key={video._id} videoDetails={video} />)}
        </div>
    </div>)
}

export {History}