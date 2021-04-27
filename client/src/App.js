import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/posts';

import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App =() => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch(); 
  
  useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
    <BrowserRouter>
    <Container /* className={"toggle" + (isShowing ? "On" : "Off")} */>
        <NavBar currentId = {currentId}  setCurrentId = {setCurrentId} />
        <Switch>
         <Route path= "/" exact component={Home} />
         <Route path= "/auth" component={Auth} />
        </Switch>
     </Container>
    </BrowserRouter>
    );
};

export default App;