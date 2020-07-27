import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = ({ listitems }) => {
  let name = "";
  let array = [];
  let obj = {};
  const projectList = listitems.map((item) => {
    if (name !== item.proname) {
      name = item.proname;
      array = [];
      obj = { name: name, list: array };
    }
    obj.list.push(item);
    return obj;
  });
  const listList = projectList.map((item) => (
    <div>
      <h1>{item.name}</h1>
      {item.list.map((item) => (
        <Item item={item} />
      ))}
    </div>
  ));
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

export default connect(mapStateToProps)(List);
