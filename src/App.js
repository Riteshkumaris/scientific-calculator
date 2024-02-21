import Calculator from "./components/Calculator";
import Login from "../src/components/Login/Login.js"
import Register from "../src/components/Register/Register.js"
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
