import React from "react";
import Table from "./Table";

const ModalShort = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"

    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Shortcuts
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalShort;
