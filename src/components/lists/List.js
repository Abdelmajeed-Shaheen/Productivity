import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const List = ({ prolist, list ,editItem }) => {
  const projects = prolist.map((item)=><Project item = {item} key={item.ID} list={list} editItem={editItem}/>)
  return (
    <>
      <h2 className="text-center">List</h2>
      <div className="listdiv">{projects}</div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    prolist: state.listState.projects,
  };
};

export default connect(mapStateToProps)(List);
