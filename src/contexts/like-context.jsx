import axios from "axios"
import { createContext, useContext } from "react"
import { useVideo } from "./video-context"

const LikeContext = createContext()

const encodedToken = localStorage.getItem("token")
const LikeProvider = ({children}) => {
    const {dispatch} = useVideo();
    
    const getLikedVideos = async() => {
        try {
            const response = await axios.get(
                "/api/user/likes",
                {
                    headers: {authorization: encodedToken}
                })
            
            if (response.status === 200) {
                dispatch({type:"SET_LIKED_VIDEOS",payload:response.data.likes})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const addToLikedVideos = async(video) => {
        try {
            const response = await axios.post (
                "/api/user/likes",
                {video},
                {
                    headers: {authorization: encodedToken}
                })
                dispatch({type:"SET_LIKED_VIDEOS",payload:response.data.likes})
            
        } catch (error) {
            console.log(error)
        }
    }
    const removeFromLikedVideos = async(_id) => {
        try {
            const response = await axios.delete(
                `/api/user/likes/${_id}`,
                {
                    headers: {authorization: encodedToken}
                })
                dispatch({type:"SET_LIKED_VIDEOS",payload:response.data.likes})
            
        } catch (error) {
            console.log(error)
        }
    }

    const value = {getLikedVideos,addToLikedVideos,removeFromLikedVideos}
    return (
        <LikeContext.Provider value={value}>
            {children}
        </LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext)

export {LikeProvider,useLike}