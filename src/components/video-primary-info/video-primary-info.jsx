import "./video-primary-info.css"

const VideoPrimaryInfo = ({videoDetails}) => {
    const {title} = videoDetails
    return(<div className="primary-info-section">
        <h5 className="primary-info-title">{title}</h5>
        <div className="flex-r">
        <div className="primary-info-item">
            <i className="fa-regular fa-thumbs-up"></i>
            <span className="primary-info-text">Like</span>
        </div>
        <div className="primary-info-item">
        <i className="fa-solid fa-plus"></i>
        <span className="primary-info-text">Save</span>
        </div>
    </div>
    </div>
    )
}

export {VideoPrimaryInfo}
