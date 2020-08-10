import React from "react";
import { connect } from "react-redux";
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import Item from "./Item";
import ItemInput from "../forms/ItemInput";
import { orderItems } from "../../redux/actions";

const Inbox = ({ list,orderItems, add }) => {

  const handleRLDDChange= (newItems)=>{
    orderItems(newItems)
  }
  return (
    <>
      <h2 className="text-center">Inbox</h2>

      <div className="inboxdiv">
        <div style={{ padding: "5px" }}>
          <ItemInput addItem={add}/>
        </div>
        <div style={{ overflowY: "auto", height: "420px", padding: "5px" }}>
        <RLDD
          items={list}
          itemRenderer={(item,index) => {
          return (
            <div className="item" ><Item item={item} index={index} /></div>
            );
           }}
          onChange={handleRLDDChange}
/>
        </div>
      </div>
    </>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    orderItems: (itemList) => dispatch(orderItems(itemList)),
  };
};
export default connect(null, mapDispatchToProps)(Inbox);
