import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link} from 'react-router-dom';

const navbar = props => (

<header className="navbar">
    <nav className="navbar__navigation">
        <div className="navbar__toggle-button">
            <DrawerToggleButton click={props.drawerToggleClickHandler}/>
        </div>
        <div className="navbar__logo"><a href="/">CR</a></div>
        <div className="spacer" />
        <div className="navbar__navigation-items">
          <ul>
              <li><Link to={"/"}>Home </Link></li>
              <li><Link to={"/work"}>Work </Link></li>
              <li><Link to={"/about"}>About </Link></li>
              <li><Link to={"/contact"}>Contact </Link></li>
          </ul>
        </div>
    </nav>
</header>
);

export default navbar;