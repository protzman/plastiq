import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import Meta from './Meta'
import Sidebar from './Sidebar'

const styles = makeStyles(theme => ({
  root: {
    // margin: '1em calc(74px + 1em)',
    marginLeft: '15%',
    marginTop: '64px',
    padding: '16px',
    background: theme.palette.background.default
  }
}))

export default function Page(props) {
  const classes = styles()
  return (
    <div>
      <Meta />
      <Sidebar />
      <Container className={classes.root}>
        {props.children}
      </Container>
    </div>
  )
}
