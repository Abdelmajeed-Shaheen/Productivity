import React ,{Component} from "react"


class Search extends Component {
    render(){
        return(
            <div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search...."
              id="search"
              name="search"
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className=" fa fa-search"> </i>
              </span>
            </div>
          </div>
      </div>
        )

    }
}

export default Search