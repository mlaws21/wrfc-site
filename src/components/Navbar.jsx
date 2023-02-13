import './style/Navbar.css'
import logo from './images/logo.png';
function Navbar() {

    return (
        <header>
            <div id="imgDiv">
                <img src={logo} alt='WRFC Logo'></img>
            </div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>

                <li>
                    <a href='/about'>About</a>
                </li>

                <li>
                    <a href='/schedule'>Schedule</a>
                </li>

                <li>
                    <a href='/roster'>Roster</a>
                </li>

                <li>
                    <a href='/rules'>Rules</a>
                </li>

                <li>
                    <a href='/directions'>Directions</a>
                </li>

                <li>
                    <a href='/merch'>Merch</a>
                </li>
                
                <li>
                    <a href='/contact'>Contact</a>
                </li>

                <li>
                    <a href='/donate'>Donate</a>
                </li>

                {/* <li>
                    <a href='/login'>Login</a>
                </li> */}
            </ul>
        </header>
    )
}

export default Navbar;