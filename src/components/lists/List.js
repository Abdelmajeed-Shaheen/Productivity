import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = ({listitems}) => {
  const listList = listitems.map((item) => <Item item={item} />);
  return (
    <>
      <h2 className="text-center">List</h2>
  <div className="listdiv">{listList}</div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    listitems: state.listState.listList,
  };
};

export default connect(mapStateToProps, null)(List);
