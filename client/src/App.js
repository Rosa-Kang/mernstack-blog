import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/App.css'
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App =() => {
    const [isShowing, setIsShowing] = useState(false);

    return (
    <BrowserRouter>
    <Container /* className={"toggle" + (isShowing ? "On" : "Off")} */>
        <NavBar isShowing={isShowing} setIsShowing={setIsShowing}/>
        <Switch>
         <Route  exact path= "/"  component={Home} isShowing={isShowing} setIsShowing={setIsShowing}/>
         <Route  path= "/auth" component={Auth} exact/>
        </Switch>
     </Container>
    </BrowserRouter>
    );
};

export default App;