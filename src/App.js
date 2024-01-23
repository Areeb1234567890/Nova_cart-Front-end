import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
