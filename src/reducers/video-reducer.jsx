
const initialReducerValue = {
    categories:[],
    selectedCategory:"All",
    videos:[],
    likedVideos:[],
    watchLaterVideos:[],
}

const videoReducer = (state,action) => {
    switch (action.type) {
        case "SET_VIDEOS":
            return {...state,videos:action.payload}
        case "SET_CATEGORIES":
            return {...state,categories:action.payload}
        case "CHANGE_CATEGORY":
            return {...state,selectedCategory:action.payload}
        default:
            return state
    }
}

export {initialReducerValue,videoReducer}
