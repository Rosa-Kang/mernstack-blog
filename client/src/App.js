import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grow, Grid, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './images/flymangologo.png';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import SignInSide from './components/SignIn/SignIn';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App =() => {
    const [currentId, setCurrentId] = useState(null);
    const [isShowing, setIsShowing] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch(); 

  const openModal = () => {
    setIsShowing(true);
  };
  
  const openSignIn = () => {
    setSignIn(true);
  }
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Container className={"toggle" + (isShowing ? "On" : "Off")}>
          <AppBar className={classes.appBar} position="static" color='inherit'>
            <Toolbar className={classes.toolBar}>
            <div className={classes.left}>
                <img 
                className={classes.image} 
                src={logo} alt="memories" height='60'/>
                <h1 className={classes.image} >flymango.</h1>
            </div>
            <div className={classes.right}>
             <Button onClick={openModal} className={classes.rightBtn} variant="contained" color="primary" component="span">Add post</Button>
             <Button onClick={openSignIn} className={classes.rightBtn} variant="contained" color="primary" component="span">Sign in</Button>
            </div>
            </Toolbar>
            </AppBar>
            <Grow in>
                <Container item xs={12} sm={6} md={4} className={classes.cardGrid} >
                    <Grid  spacing={3}>
                        <Grid >
                            <Posts container setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid> 
                </Container>
            </Grow> 
            <Grid item xs={12} sm={4}>
           {isShowing && <Form setIsShowing={setIsShowing} currentId = {currentId}  setCurrentId = {setCurrentId} />}
            </Grid>
        </Container>
    );
};

export default App;