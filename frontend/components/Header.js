import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from "@material-ui/core/styles"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
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
})

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

Router.onRouteChangeError = () => {

}

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.body}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Observer
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);