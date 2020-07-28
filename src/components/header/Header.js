import React from "react"

const Header = (props)=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <span className="navbar-brand" >Productivity</span>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
        </li>
        <li className="nav-item">
        </li>
      </ul>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Add List</button>
    </div>
  </nav>
  )
}
export default Header;