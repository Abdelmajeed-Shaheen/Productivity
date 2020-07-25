import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const Inbox = ({ inboxitems }) => {
  const inboxlist = inboxitems.map((item) => <Item item={item} />);
  return (
    <>
      <h1 className="text-center">Inbox</h1>
      <div className="inboxdiv">{inboxlist}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inboxitems: state.listState.inboxList,
  };
};

export default connect(mapStateToProps, null)(Inbox);
