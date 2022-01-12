import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/image/mainlogo.png';
const Navbar = () =>{

    return (
        <div className="Navbar">
              <img src={logo} alt="Logo-Missing" />
      <ul>
        <li>
          <i className="fa fa-address-card-o" aria-hidden="true"></i>{" "}
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <i className="fa fa-folder-open-o" aria-hidden="true"></i>{" "}
          <Link to="/folders">Folders</Link>
        </li>
        <li>
          <i className="fa fa-folder-open-o" aria-hidden="true"></i>{" "}
          <Link to="/folders">Create User</Link>
        </li>
      </ul>
        </div>
    
    );
}

export default Navbar;