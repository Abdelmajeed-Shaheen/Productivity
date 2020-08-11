import React from "react";
import { connect } from "react-redux";
import Project from "./Project";
import { Droppable } from "react-beautiful-dnd";

const List = ({ prolist, list, editItem }) => {
  const projects = prolist.map((item) => (
    <Project item={item} key={item.ID} list={list} editItem={editItem} />
  ));
  return (
    <Droppable droppableId="id-2" type="ITEMList">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h2 className="text-center">List</h2>
          <div className="listdiv">{projects}</div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
const mapStateToProps = (state) => {
  return {
    prolist: state.listState.projects,
  };
};

export default connect(mapStateToProps)(List);
