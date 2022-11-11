import logo from '../../../public/assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
        </div >
    )
}

export default Header