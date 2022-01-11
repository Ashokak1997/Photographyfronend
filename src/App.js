import './App.css';
import Login from './Components/Loginform/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Registration/Register';
import Resetpassword from './Components/Reset-password/Resetpassword';
import User from './Components/User/User';

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <Login />
        {/* <Register /> */}
        {/* <Resetpassword /> */}
      {/* <div><User /></div> */}
    </div>
  );
}

export default App;
