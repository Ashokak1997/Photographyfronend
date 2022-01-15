import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Folder from "./Components/Folder/Folder";
import Login from "./Components/Loginform/Login";
import Navbar from "./Components/Navbar/Navbar";
import Package from "./Components/Package/Package";
import Question from "./Components/Question/Question";
import Register from "./Components/Registration/Register";
import Resetpassword from "./Components/Reset-password/Resetpassword";
import Upload from "./Components/Upload/Upload";
import User from "./Components/User/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <User />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/folders" element={<Folder />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/folder/upload" element={<Upload />} />
          <Route path="/folder/question" element={<Question />} />
          <Route path="/package" element={<Package />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;