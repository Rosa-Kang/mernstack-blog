import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
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
                <Container item xs={12} sm={6} md={4} >
                    <Grid  spacing={3}>
                        <Grid >
                            <Posts container setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
    )
}

export default Home
