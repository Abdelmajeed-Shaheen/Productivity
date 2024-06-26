import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem, addItem, search, orderItems } from "../redux/actions";
import Header from "./header/Header";
import Inbox from "./lists/Inbox";
import List from "./lists/List";
import Calender from "./lists/Calender";
import ModalShort from "./Shortcuts/ModalShort";
import Search from "./forms/Search";
import { DragDropContext } from "react-beautiful-dnd";

class Main extends Component {
  state = {
    itemList: this.props.list,
  };
 
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.index === source.index) {
      return;
    }
    const changedItem = this.props.list.find(
      (item) => String(item.ID) === draggableId
    );
    const newArray = this.props.list.filter(
      (item) => item.ID !== changedItem.ID
    );
    newArray.splice(destination.index, 0, changedItem);
    this.props.orderItems(newArray);
    console.log(this.props.list);
    console.log(newArray);
    window.location.reload(true)
  };

  render() {
    const { list, editItem, addItem, search } = this.props;
    const edit = (item) => {
      editItem(item);
    };
    const add = (item) => {
      addItem(item);
    };
    const handelSearch = (value) => {
      search(value);
    };
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Search search={handelSearch} />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="maindiv">
          <div className="row mt-3" style={{ marginLeft: 0, marginRight: 0 }}>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="col-md-4">
                <Inbox list={this.props.list} editItem={edit} add={add} />
              </div>
            </DragDropContext>

            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="col-md-4">
                <List list={this.props.list} editItem={edit} />
              </div>
            </DragDropContext>
            <div className="col-md-4">
              <Calender list={this.props.list} editItem={edit} />
            </div>
          </div>
        </div>
        <div
          className="float"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          <i className="fas fa-info my-float"></i>
        </div>
        <ModalShort />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.listState.inboxList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (item) => dispatch(editItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    search: (value) => dispatch(search(value)),
    orderItems: (items) => dispatch(orderItems(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
