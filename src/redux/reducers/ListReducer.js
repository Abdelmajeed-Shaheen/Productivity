import {ADD_ITEM} from "../actions/actionTypes"


const inistialState = {
    inboxList:[],
}

const reducer = (state = inistialState , action) =>{
    switch (action.type){
        case ADD_ITEM:
            const newItem = {title:action.payload,done:false}
            return{
                ...state,
                inboxList:state.inboxList.concat(newItem)
            }
        default:
            return{
                ...state,
            }
    }
}

export default reducer