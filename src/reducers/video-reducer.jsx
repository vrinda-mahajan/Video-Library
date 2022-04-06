
const initialReducerValue = {
    categories:[],
    selectedCategory:"All",
    videos:[],
    likedVideos:[],
    watchLaterVideos:[],
    currentVideo:{},
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
        default:
            return state
    }
}

export {initialReducerValue,videoReducer}
