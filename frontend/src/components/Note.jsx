import React from "react";
import axios from "axios";

function Note(props) {

  function handleClick(id) {
    axios.post("http://localhost:8000/delete/" + id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => handleClick(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
