import { usePlaylist, useVideo } from "contexts"
import { Link } from "react-router-dom"
import "./playlist.css"

const Playlist = () => {
    const {state} = useVideo()
    const {deletePlaylist} = usePlaylist()

    return <div className="playlist-container">
        {state.playlists.length>0
        ?<div className="flex-r flex-wrap">
            {state.playlists.map((playlist)=>
            <div key={playlist._id} className="playlist-card m1 center">
                <Link to={`/playlist/${playlist._id}`} className="text-decor-none">
                    <h4 className="playlist-name">{playlist.name}</h4>
                </Link>
                <div className="playlist-trash-btn card-footer">
                    <button onClick={()=>{deletePlaylist(playlist._id)}} className="btn-icon1 btn playlist-trash-icon">
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        )}
        </div>
        :<h4>You haven't created any playlist.</h4>}
    </div>
}

export {Playlist}