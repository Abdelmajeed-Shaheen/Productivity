import {combineReducers} from "redux"

import listReducer from "./ListReducer"

const rootReducer = combineReducers({
    listState:listReducer
})

export default rootReducer