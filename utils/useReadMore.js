import { useState } from "react"

const useReadMore = ()=>{

    const [isExpanded,setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    return {
        isExpanded,
        setIsExpanded,
        toggleExpanded,
    }

}

export default useReadMore;