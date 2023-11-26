import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/notes")
    .then((res) => {
      setNoteList(res.data)
    })
    .catch((err) => console.log(err))
  });

  return (
    <div>
      <Header />
      <CreateArea />
      {noteList.map((note) => {
        return (
          <Note
            id={note._id}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;