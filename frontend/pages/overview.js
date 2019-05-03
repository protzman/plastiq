import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

function Overview(props) {
  const { classes } = props
  return (
    <div>
      overview page
    </div>
  )
}

export default withStyles(styles)(Overview)
