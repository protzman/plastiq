import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'
import Meta from './Meta'

const styles = makeStyles(theme => ({
  root: {
    margin: '1em',
    background: theme.palette.background.default
  }
}))

export default function Page(props) {
  const classes = styles()
  return (
    <div>
      <Meta />
      <Header />
      <div className={classes.root}>
        {props.children}
      </div>
    </div>
  )
}
