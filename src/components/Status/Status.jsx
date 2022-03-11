import React from "react";
function battleStatus(props) {
    return (
        <div className="Status">
            <h2>Status: {props.battleStatus}</h2>
        </div>
    )
}
export default battleStatus;