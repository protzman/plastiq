import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  body: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  avatar: {
    width: 30,
    height: 30
  }
}))

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {

}

export default function Header() {
  const classes = styles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.body}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Avatar alt="bridgecoin" src="../static/favicon.png" className={classes.avatar} />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            BlökChain
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

  )
}
