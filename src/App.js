import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;