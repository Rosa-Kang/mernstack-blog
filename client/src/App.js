import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App =() => {
    const classes = useStyles();

    return (
    <BrowserRouter>
    <Container className={classes.app}/* className={"toggle" + (isShowing ? "On" : "Off")} */>
        <NavBar />
        <Switch>
         <Route  exact path= "/"  component={Home} />
         <Route  path= "/auth" component={Auth} exact/>
        </Switch>
     </Container>
    </BrowserRouter>
    );
};

export default App;