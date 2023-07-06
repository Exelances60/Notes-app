import React, { useContext, useState } from "react";
import "./create-notes.styles.scss";
import { NotesContext } from "../../context/notes.contex";

const CreateNotes = () => {
  const { currentNotes, setCurrentNotes } = useContext(NotesContext);
  const [openInput, setOpenInput] = useState(false);
  const [ınputValue, setınputValue] = useState("");
  const [details, setınputdetails] = useState("");

  const onChangeTitleInput = () => {
    const holderObject = {
      id: Math.trunc(Math.random() * 100),
      title: ınputValue,
      details: details,
    };
    return setCurrentNotes([...currentNotes, holderObject]);
  };
  console.log(currentNotes);
  return (
    <>
      <div className="create">
        <h2>🎉Welcome</h2>
        <input
          className={`input ${openInput ? "open" : ""}`}
          placeholder="Enter The Title Pls"
          onChange={(event) => {
            setınputValue(event.target.value);
          }}
        ></input>{" "}
        <input
          className={`input ${openInput ? "open" : ""}`}
          placeholder="Enter details"
          onChange={(event) => {
            setınputdetails(event.target.value);
          }}
        ></input>
        <button
          className={`button-save ${openInput ? "open" : ""}`}
          onClick={onChangeTitleInput}
        >
          Kaydet
        </button>
        <h2
          className="create-notes"
          onClick={() => {
            setOpenInput(!openInput);
          }}
        >
          +New Note
        </h2>
      </div>
    </>
  );
};

export default CreateNotes;
