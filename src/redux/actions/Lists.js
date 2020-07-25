import {ADD_ITEM} from "./actionTypes"


export const addItem = (item)=>{
    return{
        type:ADD_ITEM,
        payload:item
    }
}