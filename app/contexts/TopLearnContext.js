import {createContext} from "react"

const TopLearnContext = createContext({
    courses : [],
    loading : true,

})

export default TopLearnContext;