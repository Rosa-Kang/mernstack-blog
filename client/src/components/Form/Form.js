import React, { useState , useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch , useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost , updatePost } from '../../actions/posts';

const Form =({ currentId, setCurrentId, setAddPost })=> {
   const [postData, setPostData] = useState({ title:' ', message: ' ', tags: ' ', selectedField:' '})
   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
   const dispatch = useDispatch();
   const classes = useStyles();
   const user = JSON.parse(localStorage.getItem('profile'))

  useEffect (() => {
      if(post) setPostData(post);
   }, [post])

  const clear = () => {
      setCurrentId(0)
      setPostData({ title:' ', message: ' ', tags: ' ', selectedField:' '});
   }

  const closeAddPost = () => setAddPost(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
      setAddPost(false)
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
      setAddPost(false)
    }
  };

if (!user?.result?.name) {
    return (
      <Paper id="form-div" className={classes.paper} >
        <form id="form" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Please sign in to create'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}>
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Typography className={classes.pleaseLogin}>
          Please Sign In to create your own memories and like other's memories.
        </Typography>
        <Button className={classes.buttonClose} onClick={closeAddPost} variant="contained" color="secondary" size="small" fullWidth>Close</Button>
      </form>        
      </Paper>
    );
  }
  
   return (
       <Paper id="form-div" className={classes.paper} >
      <form id="form" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}>
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" onClick={closeAddPost} color="secondary" size="small" fullWidth>Close</Button>
      </form>
    </Paper>
   );
};

export default Form; 