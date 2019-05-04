import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'

import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import PlusIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import Link from 'next/link'
import Dialog from '@material-ui/core/Dialog'

import { fade } from '@material-ui/core/styles/colorManipulator'
import NewTopicDialog from './dialogs/NewTopicDialog'
import { ALL_TOPICS_QUERY } from './queries/topicQueries'


const drawerWidth = '15%'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    marginLeft: drawerWidth,
    background: 'none',
    alignItems: 'center'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    ...theme.mixins.toolbar,
  },
  spacer: {
    flexGrow: 1
  },
  // search input related stuff
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.background.search, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.background.search, 0.35),
    },
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
      width: 400,
      '&:focus': {
        width: 500,
      },
    },
  },
})

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {

}

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }

  handleClickOpen = () => {
    this.setState({ modal: true })
  };

  handleClose = () => {
    this.setState({ modal: false })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar}>
            <Link href="/overview">
              <Typography variant="h6">
                Sequense
              </Typography>
            </Link>
            <div className={classes.spacer} />
            <IconButton onClick={this.handleClickOpen}>
              <PlusIcon />
            </IconButton>
          </div>
          <Query
            query={ALL_TOPICS_QUERY}
          >
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>
              if (error) {
                return (
                  <p>
                    Error:
                    {' '}
                    {error.message}
                  </p>
                )
              }
              return (
                <List>
                  {data.topics.map(topic => (
                    <Link href={{
                      pathname: '/topic',
                      query: { id: topic.id }
                    }}
                    >
                      <ListItem button key={topic.id}>
                        <ListItemText primary={topic.name} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              )
            }}
          </Query>
        </Drawer>
        {/* stuff dialogs down at the bottom */}
        <Dialog
          id="new-metric-dialog"
          open={this.state.modal}
          onClose={this.handleClose}
          TransitionComponent={this.Transition}
          aria-labelledby="form-dialog-title"
        >
          <NewTopicDialog close={this.handleClose} />
        </Dialog>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar)
