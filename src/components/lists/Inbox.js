import React from "react"
import { connect } from "react-redux";

const Inbox = ({inboxitems})=>{
    return(
        <>
        <h1 className="text-center">Inbox</h1>
        <div className="inboxdiv">
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
    inboxitems : state.listState.inboxList
}
}

export default connect(mapStateToProps,null)(Inbox);