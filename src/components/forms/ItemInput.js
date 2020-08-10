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

  onKeyPress = (event)=>{
    if(event.charCode === 35){
      console.log(this.props.projects)
    }
  }

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
              onKeyPress={(e)=>this.onKeyPress(e)}
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

const mapStateToProps = (state) => {
  return {
    projects: state.listState.projects,
  };
};


export default connect(mapStateToProps)(ItemInput);
