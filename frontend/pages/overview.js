import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Map from '../components/Map'

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
      <Map />
    </div>
  )
}

export default withStyles(styles)(Overview)
