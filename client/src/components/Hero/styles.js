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
    margin: "2vw"
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
  }
}));