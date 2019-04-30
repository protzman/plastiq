import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Login from '../components/Login'

const styles = theme => ({
  root: {
  },
})

class Index extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Login />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
