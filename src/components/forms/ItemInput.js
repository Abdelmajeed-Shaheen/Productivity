import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions";

class ItemInput extends Component {
  state = {
    item: "",
  };

  onChange = (item) => {
    this.setState({ item });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.item) {
      this.props.addItem(this.state.item);
      this.setState({ item: "" });
    }
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Item...."
              id="item"
              name="item"
              value={item}
              onChange={(e) => this.onChange(e.target.value)}
            />
            <div className="input-group-prepend">
              <button className="input-group-text" id="basic-addon1">
                <i className=" fa fa-plus"> </i>
              </button>
            </div>
          </div>
        </form>
      </div>
      //
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(ItemInput);
