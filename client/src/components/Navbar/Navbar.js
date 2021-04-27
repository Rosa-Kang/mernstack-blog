import React, { useState , useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import Form from '../Form/Form';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import logo from '../../images/flymangologo.png';

const Navbar =({ currentId, setCurrentId })=> {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); 
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [isShowing, setIsShowing] = useState(false);
  

  const openModal = () => {
    setIsShowing(true);
  };

    const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color='inherit' >            
            <Toolbar className={classes.left}>
                <img className={classes.image} src={logo} alt="memories" height='60'/>
                <h1  className={classes.image} >flymango.</h1>
            </Toolbar>
            <Toolbar className={classes.right}>
             <Button onClick={openModal} className={classes.rightBtn} variant="contained" color="primary" component="span">Add post</Button>
             {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (<Button  component={Link} to="/auth"  className={classes.rightBtn} variant="contained" color="primary" component="span">Sign in</Button>)}
            </Toolbar>
           {isShowing && <Form setIsShowing={setIsShowing} currentId = {currentId}  setCurrentId = {setCurrentId} />}
    </AppBar>
  );
}

export default Navbar;