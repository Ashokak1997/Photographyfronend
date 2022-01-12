import './User.css';
const User = () => {
    return (
        <div className="User">
            <div>
                <span className="user_name">Chella Durai</span>
                <i className="fa fa-user-o logout_icon" aria-hidden="true"></i>
            </div>
            <hr />
        </div>
    );
}

export default User;