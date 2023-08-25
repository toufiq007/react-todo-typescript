import "./App.css";
import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import SingleToDo from "./components/SingleToDo";

function App() {
  return (
    <>
      <h2>React ToDo with Typescript</h2>
      <Navbar />
      <AddToDo />
      <SingleToDo />
    </>
  );
}

export default App;
