import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const List = ({ prolist }) => {
  const projects = prolist.map((item)=><Project item = {item} key={item.ID}/>)
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
