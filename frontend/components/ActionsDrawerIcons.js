import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/styles'
import CloudOffIcon from '@material-ui/icons/CloudOff'
import HearingIcon from '@material-ui/icons/Hearing'
import StarIcon from '@material-ui/icons/Star'
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import TimelineIcon from '@material-ui/icons/Timeline'

import FingerprintIcon from '@material-ui/icons/Fingerprint'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import LeakAddIcon from '@material-ui/icons/LeakAdd'
import VpnLockIcon from '@material-ui/icons/VpnLock'
import WhatsHotIcon from '@material-ui/icons/Whatshot'
import SettingsIcon from '@material-ui/icons/Settings'

const styles = makeStyles(theme => ({
  badge: {
    width: '12px',
    height: '12px',
    top: '-6px',
    right: '-6px',
    fontSize: '0.6em'
  },
  tooltip: {
    marginLeft: '77px'
  },
  listItemTooltip: {
    color: '#2E3440'
  },
  spacer: {
    flex: 1
  },
  gutters: {
    paddingLeft: '24px',
    paddingRight: '24px'
  },
  icon: {
    width: 30,
    height: 30
  }
}))

export default function ActionsDrawerIcons() {
  const classes = styles()
  return (
    <div>
      <List component="nav">
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <WhatsHotIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Recent Reports" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <FingerprintIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Darknet Detection" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <TimelineIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Network Metrics" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <GpsFixedIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Watchlist Alerting" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <LeakAddIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Beacon Detection" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <VpnLockIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Data Exfiltration" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <CloudOffIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Top-N Lists" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <StarIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Protocol Violation" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <SettingsInputComponentIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="IPv6 Tunnel Detection" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <HearingIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Web Redirection Detection" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <MailIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Network Profiling" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <DeleteIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Whitelist Generation" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <ReportIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Hide Trace" />
        </ListItem>
        <ListItem classes={{ gutters: classes.gutters }} button>
          <ListItemIcon>
            <SettingsIcon classes={{ root: classes.icon }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  )
}

ActionsDrawerIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}