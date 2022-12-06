import { Link } from 'react-router-dom'
import logo from '/assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='logo'>
            <Link to='/'><img src={logo} alt="" /></Link>
            </div>
        </div >
    )
}

export default Header