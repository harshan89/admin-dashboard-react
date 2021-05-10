import logo from './logo.svg';

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
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img src={logo} alt=""/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;