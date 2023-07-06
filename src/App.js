import "./App.css";
import CreateNotes from "./componets/create-notes/create-notes";
import NotesContainer from "./componets/notes-container/notes-container";
import Title from "./componets/title/title";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <CreateNotes></CreateNotes>
      <NotesContainer></NotesContainer>
    </div>
  );
}

export default App;
