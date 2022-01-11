import './Login.css';
const Login = () => {
    return (
        <div className='Login'>
            <div className='box'>
                <h2>Login</h2>
                <form>
                    <div className='inputbox'>
                        <input type="text" name="" required />
                        <label>Username</label>
                    </div>
                    <div className='inputbox'>
                        <input type="password" name="" required />
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