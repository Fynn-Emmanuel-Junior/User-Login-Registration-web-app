import { Link } from "react-router-dom";
import '@fontsource/poppins';

const Home = () => { 
    return (
        <div className="main" style={{fontFamily: 'poppins'}}>  
            <div className="overlay">
            </div>
            <div style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center',position: 'absolute', marginTop: '20px',marginLeft: '120px'}}>
                <div className="logo">
                <Link to="/" style={{color: '#fff', textDecoration: 'none'}}><h3>Logo</h3></Link>
                </div>
                <nav>
                <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '200px'}}>
                    <li>Home</li>
                    <li>Join</li>
                </ul>
                </nav>
            </div> 
            <div className="main-text">
                <div className="text">
                <p style={{marginBottom: '15px', color: '#ededee',fontSize: '15px'}}>START FOR FREE</p>
                <h2>Create new account</h2>
                <p style={{marginTop: '15px', color: 'ededee'}}>Already a member? <Link to="/login" style={{color: '#0449e9', textDecoration: 'none'}}><span>Log in</span></Link></p>
                
                </div>
                <div style={{marginTop: '20px'}}>
                    <form>
                        <input type="text" name="firstname" placeholder="First name" size="10"/>
                        <input type="text" name="lastname" placeholder="last name" size="10"/><br/>
                        <input type="email" email="email" placeholder="Email" size="33"/><br/>
                        <input type="password" password="password" placeholder="Password" size="33"/><br/>
                        <button type="submit">Create  account</button>
                    </form>

                </div>
                <div>

                </div>

            </div>

        </div>
    )
 }

 export default Home;