import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SignIn from '../components/SignIn'

const styles = theme => ({
  root: {
  },
})

class Index extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <SignIn />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
