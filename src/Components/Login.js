import { Link } from 'react-router-dom';

const Signin = () => { 
    return (
        <div className="main" style={{fontFamily: 'poppins'}}>  
            <div className="overlay">
            </div>
            <div style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center',position: 'absolute', marginTop: '20px',marginLeft: '120px'}}>
                <div className="logo">
                <Link to="/"  style={{color: '#fff', textDecoration: 'none'}}><h3>Logo</h3></Link>
                </div>
                <nav>
                <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '200px'}}>
                    <Link to="/" style={{color: '#fff', textDecoration: 'none'}}><li>Home</li></Link>
                    <li>Join</li>
                </ul>
                </nav>
            </div> 
            <div className='main-container' style={{width: '60%', height: 'auto', position: 'absolute', top: '50%', left: '50%'}}>
                <div>
                 <h3 style={{textAlign: 'center',fontSize: '35px'}}>Login to Your Account</h3>
                 <form style={{textAlign: 'center'}}>
                     <input type="email" email="email" placeholder="Email" size="33"/><br/>
                     <input type="password" password="password" placeholder="Password" size="33"/><br/>
                     <button type="submit" style={{width: '300px'}}>Log in</button>
                 </form>
                 <div style={{textAlign: 'center', marginTop: '15px'}}>
                    Dont have an account? <Link to="/" style={{color: '#0449e9', textDecoration: 'none'}}>Create Account</Link>
                 </div>
                </div>
            </div>
        </div>
    )
 }

 export default Signin;