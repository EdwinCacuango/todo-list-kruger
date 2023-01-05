import { useState } from "react";

const Note = ({ content, deleteH, ID }) => {
  const [note, setNote] = useState(content);
  const [inputNote, setInputNote] = useState(note);
  const [updating, setUpdating] = useState(false);

  const editHandler = () => {
    setUpdating((prev) => !prev);
  };
  const inputHandler = (e) => {
    if (e.target.value != "") {
      setInputNote(e.target.value);
    }
    return;
  };
  const acceptHandler = () => {
    setNote(inputNote);
    setUpdating((prev) => !prev);
  };
  const deleteHandler = () => {
    deleteH(ID);
    console.log(ID);
  };
  return (
    <div className="my-4 flex bg-white border-2 py-4 px-5  items-center justify-between gap-5 min-w-[40rem]">
      {!updating ? (
        <>
          <p>{note}</p>
          <div className="flex gap-2">
            <button
              className="bg-sky-500 py-2 px-3 rounded text-white text-center min-w-[4rem]"
              onClick={editHandler}
            >
              Edit
            </button>
            <button
              className="bg-rose-500 py-2 px-3 rounded text-white text-center"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            value={inputNote}
            placeholder={note}
            onChange={inputHandler}
            className="w-full border border-slate-300 p-2 rounded"
          />
          <button
            onClick={acceptHandler}
            className="bg-green-500 py-2 px-3 rounded text-white text-center"
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Note;
