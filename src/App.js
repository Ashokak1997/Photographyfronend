import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Folder from "./Components/Folder/Folder";
import Login from "./Components/Loginform/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Registration/Register";
import User from "./Components/User/User";

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Register /> */}
      <Router>
        
      {/* <Navbar />
         <User /> */}
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/folders" element={<Folder />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;