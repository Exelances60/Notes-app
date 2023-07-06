import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext({
  currentNotes: [
    {
      id: Math.trunc(Math.random() * 100),
      title: "",
    },
  ],
  setCurrentNotes: () => {},
});

export const NotesProvider = ({ children }) => {
  const [currentNotes, setCurrentNotes] = useState([{}]);
  useEffect(() => {
    setCurrentNotes([
      {
        id: Math.trunc(Math.random() * 100),
        title: "",
      },
    ]);
  }, []);

  const value = { currentNotes, setCurrentNotes };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
