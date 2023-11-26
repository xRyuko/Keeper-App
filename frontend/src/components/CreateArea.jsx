import React, { useState } from "react";
import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();

            axios.post("http://localhost:8000/createnote", note)
            .catch(err => console.log(err));

            setNote({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
