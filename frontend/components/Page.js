import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'
import Meta from './Meta'

const styles = theme => ({
  root: {
    margin: '1em'
  }
})

class Page extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Meta />
        <Header />
        <div className={classes.root}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Page)
