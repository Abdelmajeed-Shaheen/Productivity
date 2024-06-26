import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/actions";
import ContentEditable from "react-contenteditable";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ item, deleteItem, editItem, index }) => {
  let styleclass = item.done ? "alert alert-success" : "alert alert-warning";
  if (item.cancel) {
    styleclass = "alert alert-danger";
  }

  const handleChange = (val) => {
    const newitem = { val: val.target.value, index: index };
    editItem(newitem);
  };

  return (
    <Draggable draggableId={String(item.ID)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styleclass} role="alert">
            <ContentEditable
              onChange={handleChange}
              html={item.title}
              className="edit-style"
            />
            <span className="mx-2 text-danger">
              <i
                className="fas fa-trash-alt"
                style={{ color: "rgba(244, 67, 54, 0.7) ", float: "right" }}
                onClick={() => deleteItem(item)}
              ></i>
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
