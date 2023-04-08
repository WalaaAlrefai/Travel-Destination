import {Link} from 'react-router-dom'
import './Navbar.css'

function NavBar(){
    return(
        <nav className='nav'>
        <Link to="/" className='link'>Home</Link>
        </nav>
    )

}
export default NavBar 