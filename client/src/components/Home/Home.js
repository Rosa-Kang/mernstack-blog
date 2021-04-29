import React, { useState, useEffect } from 'react';
import { Posts } from '../Posts/Posts';
import { Container, Grow, Grid } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';


const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch(); 
  
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    return (
            <Grow in>
                <Container>
                    <Grid>
                        <Posts  container currentId = {currentId} setCurrentId = {setCurrentId}/>
                    </Grid> 
                </Container>
            </Grow>
    )
}

export default Home;
