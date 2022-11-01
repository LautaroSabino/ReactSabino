import logo from '../../assets/img/logo2.png'
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