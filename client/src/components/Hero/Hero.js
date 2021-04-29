import React, {useState} from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import plane1 from '../../images/plane.png';
import plane2 from '../../images/plane.gif';

const Hero = () => {
    const classes = useStyles();
    const [plane, setPlane] = useState(true)


    const movieSwitch =() => {
        plane? 
        setPlane(false) : setPlane(true)
    }
    return (
        <Container className={classes.hero}>
        <Grid className={classes.heroLeft}>
            <Typography className={classes.question}>This year, where you want to travel?</Typography>
            <Button onClick={movieSwitch} className={classes.rightBtn} variant="contained" component="span" >Let me pick one for you!</Button>
        </Grid>
        <Grid>
            <img className={classes.plane} src={plane? plane1 : plane2}/>
        </Grid>
        </Container>

    )
}

export default Hero;