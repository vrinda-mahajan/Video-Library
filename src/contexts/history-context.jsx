import axios from "axios"
import { createContext, useContext } from "react"
import { useVideo } from "./video-context"

const HistoryContext = createContext()

const HistoryProvider = ({children}) => {
    const token =localStorage.getItem("token")
    const {dispatch} = useVideo()

    const getHistory = async() => {
        const response = await axios.get(
            "/api/user/history",
            {headers:{
                authorization:token
            }})
        dispatch({type:"SET_HISTORY",payload:response.data.history})
    }

    const addVideoToHistory = async (video) => {
        const response = await axios.post(
            "/api/user/history",
            {video},
            {headers:{
                authorization:token
            }}
        )
        dispatch({type:"SET_HISTORY",payload:response.data.history})
    }

    const removeVideoFromHistory = async(videoId) => {
        const response = await axios.delete(
            `/api/user/history/${videoId}`,
            {headers:{
                authorization:token
            }}
        )
        dispatch({type:"SET_HISTORY",payload:response.data.history})
    }

    const clearHistory = async() => {
        const response = await axios.delete(
            "/api/user/history/all",
            {headers:{
                authorization:token
            }}
        )
        dispatch({type:"SET_HISTORY",payload:response.data.history})
    }

    const value = {getHistory,addVideoToHistory,removeVideoFromHistory,clearHistory}
    return(
        <HistoryContext.Provider value={value}>
            {children}
        </HistoryContext.Provider>
    )
}

const useHistory = () => useContext(HistoryContext)

export {HistoryProvider,useHistory}
