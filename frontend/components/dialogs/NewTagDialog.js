import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import gql from 'graphql-tag'

import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import faker from 'faker'
import { ALL_TOPICS_QUERY } from '../queries/topicQueries'

const CREATE_TOPIC_MUTATION = gql`
  mutation CREATE_TOPIC_MUTATION(
    $title: String!
    $description: String!
  ){
    createTopic(
      title: $title
      description: $description
    ) {
    id
    title
  }
}
`
const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  group: {
    margin: '8px 0',
  },
  chartitem: {
    flex: 1, display: 'inline', marginLeft: '16px', textAlign: 'center'
  },
  item: {
    marginTop: '4em'
  }
})

class NewTagDialog extends Component {
  state = {
    title: this.props.title,
    description: `${faker.lorem.paragraphs()}`,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  update = (cache, payload) => {
    let data = cache.readQuery({ query: ALL_TOPICS_QUERY })
    const newData = [...data.topics, payload.data.createTopic]
    cache.writeQuery({ query: ALL_TOPICS_QUERY, newData })
  };

  render() {
    const { classes, close } = this.props
    return (
      <div>
        <form onSubmit={async (e) => {
          // stop the form from submitting

          close()
        }}
        >

          <DialogTitle id="form-dialog-title">Create new tag {this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText classes={{ root: classes.root }}>
              Tags are used to group similar posts together within a topic. You can search tags and see available posts or see what tags exist within a certain topic.
              </DialogContentText>
            <FormControl fullWidth className={classes.item}>
              <Input
                autoFocus
                id="tag-title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="tag title"
                type="text"
                classes={{ root: classes.root }}
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth className={classes.item}>
              <Input
                id="topic-description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="topic description"
                type="text"
                classes={{ root: classes.root }}
                fullWidth
                multiline
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
              </Button>
            <Button type="submit" color="primary">
              Create
              </Button>
          </DialogActions>
        </form>
      </div>
    )
  }
}

NewTagDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NewTagDialog)
