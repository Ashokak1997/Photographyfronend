import './Register.css';
const Register = () => {
    return ( 
        <div className='Register'>
        <div className='box'>
            <h2>Registration</h2>
            <form>
                <div className='inputbox'>
                    <input type="text" name="" required />
                    <label>Name</label>
                </div>
                <div className='inputbox'>
                    <input type="email" name="" required />
                    <label>E-mail</label>
                </div>
                <div className='inputbox'>
                    <input type="number" name="" required />
                    <label>Phone Number</label>
                </div>
                <div className='inputbox'>
                    <input type="text" name="" required />
                    <label>Address</label>
                </div>               
                {/* <br /> */}
                <input type="submit" name='' value="Submit"/>
            </form>
        </div>
    </div>
     );
}
 
export default Register;