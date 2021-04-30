import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  heroLeft:{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  hero:{
    justifyContent:"space-around",
    alignItems:"center",
    display: "flex",
    margin: "6% auto"
  },
  question: {
    fontFamily: "Gloria Hallelujah",
    fontSize: "1.3vw",
    padding: "20px 0px"
  }, 
   rightBtn :{
    color: 'white',
    marginRight: '10px',
    background: '#38b2ac',
    textAlign: 'center',
  },
  plane: {
    maxWidth: "486px",
    border: "none",
  },
//hero card 

 root: {
    maxWidth: "60%",
    margin: "4% auto"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "red",
  },



}));