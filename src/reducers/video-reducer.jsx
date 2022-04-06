
const initialReducerValue = {
    categories:[],
    selectedCategory:"All",
    videos:[],
    likedVideos:[],
    watchLaterVideos:[],
    currentVideo:{},
    playlists:[],
    currentPlaylist:null,
    history:[],
}

const videoReducer = (state,action) => {
    switch (action.type) {
        case "SET_VIDEOS":
            return {...state,videos:action.payload}
        case "SET_CATEGORIES":
            return {...state,categories:action.payload}
        case "CHANGE_CATEGORY":
            return {...state,selectedCategory:action.payload}
        case "SET_CURRENT_VIDEO":
            return {...state,currentVideo:action.payload}
        case "SET_LIKED_VIDEOS":
            return {...state,likedVideos:action.payload}
        case "SET_WATCH_LATER_VIDEOS":
            return {...state,watchLaterVideos:action.payload}
        case "SET_PLAYLIST":
            return {...state,playlists:action.payload}
        case "SET_PLAYLIST_VIDEO":
            return {
                ...state,
                playlists: [...state.playlists].map((item) =>
                item._id === action.payload._id ? action.payload : item
                )
            };
        case "SET_CURRENT_PLAYLIST_VIDEO":
            return {...state,currentPlaylist:action.payload}
        case "SET_HISTORY":
            return {...state,history:action.payload}
        default:
            return state
    }
}

export {initialReducerValue,videoReducer}
