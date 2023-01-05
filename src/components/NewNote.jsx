import { useState } from "react";

const NewNote = ({ handler }) => {
  const [newNote, setNewNote] = useState("");
  const inputHandler = (e) => {
    setNewNote(e.target.value);
  };

  const addHandler = () => {
    handler(newNote);
    setNewNote("");
  };
  return (
    <div className="min-w-[40rem] flex justify-between items-center gap-2 ">
      <input
        className="w-full border border-slate-300 p-2 rounded"
        value={newNote}
        onChange={inputHandler}
      />
      <button
        className="bg-blue-500 py-2 px-3 rounded text-white text-center min-w-[8rem]"
        onClick={addHandler}
      >
        Create todo
      </button>
    </div>
  );
};

export default NewNote;
