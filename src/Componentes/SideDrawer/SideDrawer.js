import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClases = 'side-drawer';
    if (props.show){
        drawerClases = 'side-drawer open';
    }
   return (
   <nav className={drawerClases} >
        <ul>
            <li><a href="/">Home </a></li>
            <li><a href="/">Work </a></li>
            <li><a href="/">About </a></li>
            <li><a href="/">Contact </a></li>
        </ul>

    </nav>
    );

};

export default sideDrawer;