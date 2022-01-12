import { useState } from 'react';
import './Login.css';
const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const userChange = (e) => {
        setName(e.target.value);
    }

    const passwordchange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='Login'>
            <div className='box'>
                <h2>Login</h2>
                <form>
                    <div className='inputbox'>
                        <input type="text" name="" required onChange={userChange} />
                        <label>Username</label>
                    </div>
                    <div className='inputbox'>
                        <input type="password" name="" required onChange={passwordchange} />
                        <label>Password</label>
                    </div>
                    <div className='forget'>
                        <p>forget password?</p>
                    </div>
                    {/* <br /> */}
                    <input type="submit" name='' value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Login;