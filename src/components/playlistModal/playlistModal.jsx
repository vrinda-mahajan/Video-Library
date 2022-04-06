import { usePlaylist, useVideo } from "contexts"
import { useState } from "react"
import "./playlistModal.css"

const PlaylistModal = ({video,handleModal}) => {
    const [playlistName,setPlaylistName] = useState("")
    const {addNewPlaylist,addVideoToPlaylist,deleteVideoFromPlaylist} = usePlaylist()
    const {state} = useVideo()
    const addPlaylistHandler = () => {
        if (playlistName.length>0){
            addNewPlaylist({name:playlistName})
            setPlaylistName("")
        }
    }
    const handlePlaylistChange = (e,playlistId) => {
        (e.target.checked)
        ?addVideoToPlaylist(playlistId,video)
        :deleteVideoFromPlaylist(playlistId,video._id)
    }
    const closeModal = () => handleModal(false)

    return <>
    <div className="show-modal center">
        <div className="modal-container">
            <div className="flex-r">
                <button onClick={() => closeModal()} className="modal-close-btn m-left-auto">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="center flex-c">
            <div>
                <h3 className="p1">Add to playlist.</h3>
                {state.playlists.length>0 && (
                <div className="flex-c">
                    {state.playlists.map((playlist)=>(
                         <label
                         key={playlist._id}
                         htmlFor={playlist.name}
                         className="text-lg"
                         >
                         <input
                           id={playlist.name}
                           type="checkbox"
                           checked={playlist.videos.some((item) => item._id === video._id)}
                           className="playlist-checkbox-input"
                           onChange={(e) => handlePlaylistChange(e, playlist._id)}
                         />
                         {playlist.name}
                       </label>
                    ))}
                </div>
                )}
            </div>
            <div className="input-container playlist-input m1">
                <input 
                    className="input-field" 
                    type="text" 
                    placeholder="Playlist name"
                    value={playlistName}
                    onChange={(e)=>setPlaylistName(e.target.value)} />
            </div>
            <div className="modal-footer flex-r">
                <button onClick={()=>addPlaylistHandler()} className="btn btn-primary">Create New Playlist</button>
            </div>
            </div>
        </div>
        </div>
    </>
}

export {PlaylistModal}