import React, { Component } from "react"


class ItemInput extends Component{
  state={
    item:""
  }

  onChange = item => {
    this.setState({ item });
  };

  render(){
    const { item } = this.state;
    return(
        <div>
          <form >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Item...."
                id="item"
                name="item"
                value={item}
                onChange={e => this.onChange(e.target.value)}
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
    )
}
}
export default ItemInput