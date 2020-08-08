import React from "react";
import { connect } from "react-redux";
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import Item from "./Item";
import ItemInput from "../forms/ItemInput";
import { orderItems } from "../../redux/actions";

const Inbox = ({ inboxitems,orderItems }) => {
  const inboxlist = inboxitems.map((item, index) => (
    <Item item={item} index={index} />
  ));
  const handleRLDDChange= (newItems)=>{
    orderItems(newItems)
  }
  return (
    <>
      <h2 className="text-center">Inbox</h2>

      <div className="inboxdiv">
        <div style={{ padding: "5px" }}>
          <ItemInput />
        </div>
        <div style={{ overflowY: "auto", height: "420px", padding: "5px" }}>
        <RLDD
          items={inboxitems}
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

const mapStateToProps = (state) => {
  return {
    inboxitems: state.listState.inboxList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderItems: (itemList) => dispatch(orderItems(itemList)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
