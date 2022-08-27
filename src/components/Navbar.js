import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

    return (
      <nav className="myNavbar">
        <h1>Master class Blog</h1>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to='/create' style={{ color : 'white' , 
        backgroundColor : '#f1356d' ,
        borderRadius : '8px'
        }}>New Blog</Link>
        </div>
      </nav>

    )
}

export default Navbar;
