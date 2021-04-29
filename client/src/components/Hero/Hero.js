import React, {useState} from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import plane1 from '../../images/plane.png';
import plane2 from '../../images/plane.gif';

const Hero = () => {
    const classes = useStyles();
    // const [visible, setVisible] = useState(false)
    const [plane, setPlane] = useState(false)

    const movieSwitch =() => {
        // const turnOn = () => setVisible(true);
        plane? 
        setPlane(false) : setPlane(true)
        // setTimeout(turnOn, 4000)
    }

    return (
        <Container className={classes.hero}>
        <Grid className={classes.heroLeft}>
            <Typography className={classes.question}>This year, where do you want to go?</Typography>
            <Button onClick={movieSwitch} className={classes.rightBtn} variant="contained" component="span" >Let me pick one for you!</Button>
        </Grid>
        {/* { visible? (<div></div>) : ( */}
        <Grid>
            <img className={classes.plane} alt="plane" src={plane? plane2: plane1}/>
        </Grid>
        {/* )} */}
        {/* { visible ? (<div>Here is the Card!</div>) : (<div> </div>)} */}
        </Container>
    )
}

export default Hero;