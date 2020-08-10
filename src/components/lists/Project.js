import React from "react"
import Item from "./Item"

const Project = ({item , list, editItem})=>{
    const listItems = list.map((listitem,index) => (listitem.proID===item.ID&&<Item item = {listitem} index={index} editItem={editItem}/>))
    return(
        <div>
            <h4>{item.name}</h4>
        {listItems}
        </div>
    )
}
  
  export default (Project)