import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import ItemInput from "../forms/ItemInput";
import { orderItems } from "../../redux/actions";
import { Droppable } from "react-beautiful-dnd";

const Inbox = ({ list, orderItems, add }) => {
  return (
    <Droppable droppableId="id-1" type="ITEM">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h2 className="text-center">Inbox</h2>
          <div className="inboxdiv">
            <div style={{ padding: "5px" }}>
              <ItemInput addItem={add} />
            </div>
            <div style={{ overflowY: "auto", height: "420px", padding: "5px" }}>
              {list.map((item, index) => (
                <Item item={item} index={index} />
              ))}
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderItems: (itemList) => dispatch(orderItems(itemList)),
  };
};
export default connect(null, mapDispatchToProps)(Inbox);

// itemShow= {(item,index) => {
//   return(
//     <div className="item"><Item item={item} index={index} /></div>
//   )
// }}
