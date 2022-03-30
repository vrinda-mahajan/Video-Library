import { useVideo } from "contexts/video-context"
import "./chip-container.css"

const ChipContainer = () => {
    const {state,dispatch} = useVideo();
    const {categories,selectedCategory} = state;

    return (
        <div className="chip-container flex-r">
            {categories.map(({_id,categoryName}) => 
                <div key={_id}
                     onClick={()=>dispatch({type:"CHANGE_CATEGORY",payload:categoryName})}  
                     className={selectedCategory===categoryName?`chip active-chip`:`chip`}>
                    {categoryName}
                </div>)}
        </div>
    )
}

export {ChipContainer}
