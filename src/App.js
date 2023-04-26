import './App.css';
import { Route, Routes } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Man from "./components/Man";
import Woman from "./components/Woman";
import Eagle from "./components/Eagle";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/eagle" element={<Eagle />} />
      </Routes>
    </div>
  );
}


export default App;
