import "./App.css";
import Navbar from "./Components/Navbar";
import TaskForm from "./Components/TaskForm";
function App() {
  return (
    <>
      <Navbar title="Text-utils" />
      <div className="container">
        <TaskForm heading="Analysing text here" />
        
      </div>
    </>
  );
}

export default App;
