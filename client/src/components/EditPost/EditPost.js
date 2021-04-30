import React from 'react'
import {Paper} from '@material-ui/core';

import useStyles from '../Form/editStyle.js';

const EditPost = ({post}) => {
  const classes = useStyles();
    return (
       <Paper className={classes.editPost}>
          POST EDIT PAGE
        </Paper>
    )
}

export default EditPost;
