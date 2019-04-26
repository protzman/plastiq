import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'


const styles = theme => ({
  body: {
    background: theme.palette.background.paper
  }
})

class Login extends Component {
  render() {
    return (
      <div>
        login page
        <Link href="/overview">
          <a>login</a>
        </Link>
      </div>
    )
  }
}

export default withStyles(styles)(Login)