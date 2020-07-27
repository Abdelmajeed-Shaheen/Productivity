import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import ItemInput from "../forms/ItemInput";

const Inbox = ({ inboxitems }) => {
  const inboxlist = inboxitems.map((item) => <Item item={item} />);
  return (
    <>
      <h2 className="text-center">Inbox</h2>
      
      <div className="inboxdiv">
        <div style={{padding:"5px"}}>
      <ItemInput/></div>
      <div style={{overflowY:"auto",height:"420px",padding:"5px"}}>
         {inboxlist}</div>
         </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inboxitems: state.listState.inboxList,
  };
};

export default connect(mapStateToProps, null)(Inbox);
