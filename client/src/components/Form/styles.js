import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position: "fixed",
    background: 'rgba(0,0,0,0.5)',
    left: "50%",
    transform: "translate(-50%, 0)",
    padding: "3em",
    width: "40%",
    top: "20%"
  },
  form: {
    background: "white",
    borderRadius: '25px',
    padding: '4em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));