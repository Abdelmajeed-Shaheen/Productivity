import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/actions";

const Item = ({ item, deleteItem }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {item.title}
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
  };
};

export default connect(null, mapDispatchToProps)(Item);
