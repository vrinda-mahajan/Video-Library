import axios from "axios";
import { createContext, useContext } from "react"
import { useVideo } from "./video-context";


const PlaylistContext = createContext()
const PlaylistProvider = ({children}) => {
    const {dispatch} = useVideo();
    const token = localStorage.getItem("token")
    
    const getPlaylists = async() => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.get(
                "/api/user/playlists",
                {headers:{
                    authorization:token
                }})
            dispatch({type:"SET_PLAYLIST",payload:response.data.playlists})
        } catch (error) {
            console.log(error)
        }
    }
    const addNewPlaylist = async(playlist) => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.post(
                "/api/user/playlists",
                {playlist},
                {headers:{
                    authorization:token
                }})
            dispatch({type:"SET_PLAYLIST",payload:response.data.playlists})
        } catch (error) {
            console.log(error)
        }
    }
    const deletePlaylist = async(playlistId) => {
        try {
            const response = await axios.delete(
                `/api/user/playlists/${playlistId}`,
                {headers:{
                    authorization:token
                }})
            dispatch({type:"SET_PLAYLIST",payload:response.data.playlists})
        } catch (error) {
            console.log(error)
        }
    }
    const getPlaylistData = async (playlistId) => {
        try {
          const response = await axios.get(
              `/api/user/playlists/${playlistId}`, 
              {headers: { 
                    authorization: token }
                });
          dispatch({type: "SET_CURRENT_PLAYLIST_VIDEO",payload: response.data.playlist.videos,
           });
        } catch (error) {
            console.log(error)
        }
      };
    const addVideoToPlaylist = async(playlistId,video) => {
        try {
            const response = await axios.post(
                `/api/user/playlists/${playlistId}`,
                {video},
                {headers:{
                    authorization:token
                }}
            )
            dispatch ({type:"SET_CURRENT_PLAYLIST_VIDEO",payload:response.data.playlist.videos})
            dispatch ({type:"SET_PLAYLIST_VIDEO",payload:response.data.playlist})
        } catch (error) {
            console.log(error)
        }
    }

    const deleteVideoFromPlaylist = async(playlistId,videoId) => {
        try {
            const response = await axios.delete(
                `/api/user/playlists/${playlistId}/${videoId}`,
                {headers:{
                    authorization:token
                }}
            )
            dispatch ({type:"SET_CURRENT_PLAYLIST_VIDEO",payload:response.data.playlist.videos})
            dispatch ({type:"SET_PLAYLIST_VIDEO",payload:response.data.playlist})
        } catch (error) {
            console.log(error)
        }
    }

    const value = {getPlaylists,addNewPlaylist,deletePlaylist,getPlaylistData,addVideoToPlaylist,deleteVideoFromPlaylist}
    return (
        <PlaylistContext.Provider value={value}>
            {children}
        </PlaylistContext.Provider>
    )
}
const usePlaylist = () => useContext(PlaylistContext)

export {PlaylistProvider,usePlaylist}