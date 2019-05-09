import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import LivePreview from './LivePreview'
import PostInput from './PostInput'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  spacer: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  body: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    height: 72
  },
  avatar: {
    width: 30,
    height: 30
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: '20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  toolbar: {
    minHeight: '72px'
  },
  item: {
    marginBottom: theme.spacing(4)
  },
  container: {
    flexGrow: '1',
    display: 'flex',
    minHeight: '0',
  },
  column: {
    flexGrow: '1',
    overflowY: 'scroll',
    minHeight: '100%',
  },
  input: {
    paddingLeft: '14px'
  }
}))

export default function NewPost() {
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [tags, setTags] = useState()
  const classes = styles()
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div className={classes.item}>
          <Typography variant="h5">Title</Typography>
        </div>
        <div className={classes.item}>
          <Input fullWidth placeholder="title" className={classes.input} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className={classes.item}>
          <Typography variant="h5">Body</Typography>
        </div>
        <div className={classes.item}>
          <PostInput value={content} setContent={setContent} />
        </div>
        <div className={classes.item}>
          <Typography variant="h5">Tags</Typography>
        </div>
        <div className={classes.item}>
          <Input fullWidth placeholder="tags" className={classes.input} />
        </div>
        <div className={classes.item}>
          <Button variant="outlined" type="submit">Submit Post</Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.item}>
          <LivePreview content={content} title={title} tags={tags} />
        </div>
      </Grid>
    </Grid>
  )
}
