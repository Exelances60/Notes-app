import React, { useContext, useState } from "react";
import "./notes-container.styles.scss";
import { NotesContext } from "../../context/notes.contex";
const NotesContainer = () => {
  const { currentNotes } = useContext(NotesContext);
  const [date, setdate] = useState(new Date());
  return (
    <>
      <div className="notes-container">
        {currentNotes.map((val) => {
          return (
            <div key={val.id} className="notes-contain">
              <h2 className="notes-title">{val.title}</h2>
              <div className="depscrip">{val.details}</div>
              <div className="date">{date.toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NotesContainer;
