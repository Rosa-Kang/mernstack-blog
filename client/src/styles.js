import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toggleOn: {
    background: 'rgba(0,0,0,1.4)'
  },
  appBar: {
    background: '#38b2ac',   
    margin: '30px 0',
    flexDirection: 'row',
     alignItems: 'center',
  },
  toolBar: {
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
  }
}));