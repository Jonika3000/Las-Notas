import { Col, Row } from 'react-bootstrap';
import './header.css'
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='HeaderWrapper'>
                <div className='LogoWrapper'>
                    <Link to={"/"}>
                        <Logo color={"#213547"} width={50} height={50}></Logo>
                    </Link> 
                    <a>Las Notas</a>
                </div>
                <div className='MenuWrapper'>
                    <ul>
                        <li><Link to={"/login"}>Login</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Header;