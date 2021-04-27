import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    background: '#38b2ac',   
    margin: '30px 0',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  left: {
    alignItems: 'center',
    display: 'flex',
    color: 'white',
    fontFamily: 'Gloria Hallelujah'
  },
  heading: {
    color: 'white',
  },
  image: {
    marginLeft: '15px',
  },
  right: {
    marginRight: '25px',
  },
  rightBtn :{
    marginRight: '10px',
    background: '#38b2ac',
    textAlign: 'center'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));