import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './Componentes/Navbar/Navbar';
import SideDrawer from './Componentes/SideDrawer/SideDrawer';
import Backdrop from './Componentes/Backdrop/Backdrop';
import Home from './Componentes/Home/Home';
import Work from './Componentes/Work/Work';
import About from './Componentes/About/About';
import Contact from './Componentes/Contact/Contact';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
      <div style={{height: '100%'}}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
      </Switch>
        </main>
      </div> 
      </Router>
    );
  }
}

export default App;
