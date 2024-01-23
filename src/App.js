import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Hero />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/productDets/:id" element={<ProductDets />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
