import './Resetpassword.css';
const Resetpassword = () => {
    return ( 
        <div className='Reset'>
        <div className='box'>
            {/* <h2>Login</h2> */}
            <form>
                <div className='inputbox'>
                    <input type="password" name="" required />
                    <label>Reset-Password</label>
                </div>
                <div className='inputbox'>
                    <input type="password" name="" required />
                    <label>Confirm Reset-Password</label>
                </div>
                <input type="submit" name='' value="Done" />
            </form>
        </div>
    </div>
     );
}
 
export default Resetpassword;