import axios from "axios"
import { createContext, useContext } from "react"
import { useVideo } from "./video-context"

const WatchLaterContext = createContext()

const encodedToken = localStorage.getItem("token")

const WatchLaterProvider = ({children}) => {
    const {dispatch} = useVideo()

    const getWatchLaterVideos = async() => {
        try {
            const response = await axios.get(
                "/api/user/watchlater",
                {
                    headers: {authorization: encodedToken}
                })
            
            if (response.status === 200) {
                dispatch({type:"SET_WATCH_LATER_VIDEOS",payload:response.data.watchlater})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const addToWatchLater = async(video) => {
        try {
            const response = await axios.post (
                "/api/user/watchlater",
                {video},
                {
                    headers: {authorization: encodedToken}
                })
                dispatch({type:"SET_WATCH_LATER_VIDEOS",payload:response.data.watchlater})
            
        } catch (error) {
            console.log(error)
        }
    }
    const removeFromWatchLater = async(_id) => {
        try {
            const response = await axios.delete(
                `/api/user/watchlater/${_id}`,
                {
                    headers: {authorization: encodedToken}
                })
                dispatch({type:"SET_WATCH_LATER_VIDEOS",payload:response.data.watchlater})
            
        } catch (error) {
            console.log(error)
        }
    }
    const value = {dispatch,getWatchLaterVideos,addToWatchLater,removeFromWatchLater}
    return (<WatchLaterContext.Provider value={value}>
        {children}
    </WatchLaterContext.Provider>)
}

const useWatchLater = () => useContext(WatchLaterContext)

export {WatchLaterProvider,useWatchLater}