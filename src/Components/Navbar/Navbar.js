import './Navbar.css';
import logo from '../../Assets/image/mainlogo.png';
const Navbar = () =>{

    return (
        <div className="Navbar">
                <img src={logo} alt="Logo-Missing" />
                <ul>
                    <li><i class="fa fa-address-card-o" aria-hidden="true"></i> Dashboard</li>
                    <li><i class="fa fa-folder-open-o" aria-hidden="true"></i> Folders</li>
                    {/* <li>Empty</li> */}
                </ul>
        </div>
    
    );
}

export default Navbar;