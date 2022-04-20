import logo from "./logo.svg";
import "./App.css";
import Header from "./UI/Header";
import Midbar from "./UI/Header/Midbar";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Midbar />
    </div>
  );
}

export default App;
