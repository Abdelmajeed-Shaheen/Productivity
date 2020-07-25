import React from "react"


const ItemInput = (props)=>{
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
                //value={item}
                //onChange={e => this.onChange(e.target.value)}
              />
              <div className="input-group-prepend">
                <button className="input-group-text" id="basic-addon1">
                  <i className=" fa fa-plus"> </i>
                </button>
              </div>
            </div>
          </form>
        </div>
    )
}

export default ItemInput