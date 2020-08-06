import React from "react"
import Item from "./Item"
import {connect} from "react-redux"

const Project = ({item ,inboxList})=>{
    const listItems = inboxList.map((listitem,index) => (listitem.proID===item.ID&&<Item item = {listitem} index={index}/>))
    return(
        <div>
            <h4>{item.name}</h4>
        {listItems}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        inboxList: state.listState.inboxList,
    };
  };
  
  export default connect(mapStateToProps)(Project)