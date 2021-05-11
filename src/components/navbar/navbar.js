import logo from "../../user-logo.png";
import './navbar.css';

const Navbar = ({ sideBarOpen, openSideBar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left" >
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock"></i>
                </a>
                <a href="#">
                    <img src={logo} alt="" width="30px"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;