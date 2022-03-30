import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialReducerValue, videoReducer } from "../reducers/video-reducer";

const VideoContext = createContext()

const VideoProvider = ({children}) => {

    const [state,dispatch] = useReducer(videoReducer,initialReducerValue)

    useEffect(
        ()=>(async () => {
            try {
            const response = await axios.get("/api/videos")
            if (response.status===200){
                dispatch({type:"SET_VIDEOS",payload:response.data.videos})
            }
            }catch (error) {
                console.log(error)
            }
        }
    )(),[])

    useEffect(
        ()=>(async () => {
            try {
            const response = await axios.get("/api/categories")
            if (response.status===200){
                dispatch({type:"SET_CATEGORIES",payload:response.data.categories})
            }
            }catch (error) {
                console.log(error)
            }
        }
    )(),[])

    const value = {state,dispatch}
    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext)

export {VideoProvider,useVideo}
