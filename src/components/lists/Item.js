import React from "react";
import { connect } from "react-redux";
import { deleteItem, editItem } from "../../redux/actions";
import EdiText from "react-editext";

const Item = ({ item, deleteItem, editItem, index }) => {
  let styleclass = item.done ? "alert alert-success" : "alert alert-warning";
  if (item.cancel) {
    styleclass = "alert alert-danger";
  }

  const onSave = (val) => {
    const newitem = { val: val, index: index };
    editItem(newitem);
  };

  return (
    <div className={styleclass} role="alert">
      <EdiText type="text" value={item.title} onSave={onSave} />
      <span className="mx-2 text-danger">
        <i
          className="fas fa-trash-alt"
          style={{ color: "rgba(244, 67, 54, 0.7) ", float: "right" }}
          onClick={() => deleteItem(item)}
        ></i>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
    editItem: (item) => dispatch(editItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
