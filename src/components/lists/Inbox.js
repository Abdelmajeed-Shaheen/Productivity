import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const Inbox = ({ inboxitems }) => {
  const inboxlist = inboxitems.map((item) => <Item item={item} />);
  return (
    <>
      <h2 className="text-center">Inbox</h2>
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
