import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

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
              <li><a href="/">Home </a></li>
              <li><a href="/">Work </a></li>
              <li><a href="/">About </a></li>
              <li><a href="/">Contact </a></li>
          </ul>
        </div>
    </nav>
</header>
);

export default navbar;