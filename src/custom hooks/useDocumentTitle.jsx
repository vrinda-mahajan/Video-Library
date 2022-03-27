import { useEffect } from "react"

const useDocumentTitle = (title) => {
    useEffect(()=>{
        document.title=`FF Tv | ${title}`
    },[title])
}

export { useDocumentTitle };