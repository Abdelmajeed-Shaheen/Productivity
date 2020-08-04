import React from "react";
import Header from "./header/Header";
import Inbox from "./lists/Inbox";
import List from "./lists/List";
import Calender from "./lists/Calender";
import ModalShort from "./Shortcuts/ModalShort";

const Main = (props) => {
  return (
    <>
      <Header />
      <div className="maindiv">
        <div className="row mt-3" style={{ marginLeft: 0, marginRight: 0 }}>
          <div className="col-md-4">
            <Inbox />
          </div>
          <div className="col-md-4">
            <List />
          </div>
          <div className="col-md-4">
            <Calender />
          </div>
        </div>
      </div>
      <div className="float" data-toggle="modal" data-target="#staticBackdrop">
        <i className="fas fa-info my-float"></i>
      </div>
      <ModalShort />
    </>
  );
};

export default Main;
