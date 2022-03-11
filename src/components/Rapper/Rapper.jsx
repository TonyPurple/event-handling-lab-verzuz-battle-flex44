import React from "react";
function Rapper(props) {
  return (
    <div className="Rapper">
      <h1>{props.HP}</h1>
      <img src={props.pic} alt="" width="128" height="128" />
      < br />
      <button onClick={props.DropTrack}> Drop a Track</button>
    </div>
  );
}
export default Rapper;