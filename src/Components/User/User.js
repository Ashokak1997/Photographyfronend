import { Link } from 'react-router-dom';
import './User.css';
import profile from '../../Assets/image/profile.png';
const User = () => {
    return (
        <div className="User">
            <div>
                <span className="user_name"> <Link style={{color: "black",textDecoration:"none"}} to="/reset-password">User name</Link></span>
                {/* <i className="fa fa-user-o logout_icon" aria-hidden="true"></i> */}
                <img style={{marginLeft:"10px"}} src={profile} alt='' width={40}/>
            </div>
            <hr />
        </div>
    );
}

export default User;