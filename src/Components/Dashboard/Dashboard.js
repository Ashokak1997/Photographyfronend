import './Dashboard.css';
const Dashboard = () => {
    return ( 
      <div className='wrapper'>
          <div className='single-price'>
              <h1>Users</h1>
              <div className='price'>
                  <h2>42</h2>
              </div>
             
              <a href='#'>View All</a>
          </div>
           <div className='single-price'>
              <h1>Editors</h1>
              <div className='price'>
                  <h2>92</h2>
              </div>
             
              <a href='#'>View All</a>
          </div>
         {/* <div className='single-price'>
              <h1>Ultra</h1>
              <div className='price'>
                  <h2>$92</h2>
              </div>
              <div className='deals'>
                  <h4>Lorem ipsum dolors</h4>
                  <h4>Lorem ipsum dolors</h4>
              
              </div>
              <a href='#'>Select</a>
          </div> */}
      </div>
    );
}
 
export default Dashboard;
