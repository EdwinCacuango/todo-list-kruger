import { useState } from "react";
import "./App.css";
import NewNote from "./components/NewNote";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([
    { content: "Terminar los libros pendientes", id: 1 },
    { content: "Limpiar los anaqueles", id: 2 },
  ]);
  const newNoteHandler = (newNote) => {
    const newresults = { content: newNote, id: notes.length + 1 };
    setNotes((current) => [...current, newresults]);
  };
  const deleteNote = (id) => {
    const search = notes.filter((item) => item.id != id);
    setNotes(search);
  };
  return (
    <div className="App">
      <NewNote handler={newNoteHandler} />
      {notes.map((item) => {
        return (
          <Note
            content={item.content}
            key={item.id}
            deleteH={deleteNote}
            ID={item.id}
          />
        );
      })}
    </div>
  );
}

export default App;
