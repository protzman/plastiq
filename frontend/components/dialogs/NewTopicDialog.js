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

import { ALL_TOPICS_QUERY } from '../Sidebar'

const CREATE_TOPIC_MUTATION = gql`
  mutation CREATE_TOPIC_MUTATION(
    $name: String!
    $description: String!
  ){
    createTopic(
      name: $name
      description: $description
    ) {
    id
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

class NewTopicDialog extends Component {
  state = {
    name: '',
    description: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_TOPICS_QUERY })
    console.log(data, payload)
    // 2. Filter the deleted item out of the page
    // data.topics = data.items.filter(item => item.id !== payload.data.deleteItem.id)
    // 3. Put the items back!
    // cache.writeQuery({ query: ALL_TOPICS_QUERY, data })
    // TODO sort out adding the new one to the list
  };

  render() {
    const { classes, close } = this.props
    return (
      <Mutation
        mutation={CREATE_TOPIC_MUTATION}
        variables={this.state}
        update={this.update}
      >
        {(createTopic, { loading, error }) => (
          <form onSubmit={async (e) => {
            // stop the form from submitting
            e.preventDefault()
            // call the mutation
            const res = await createTopic()
            // change them to single item page

            close()

            Router.push({
              pathname: '/topic',
              query: { id: res.data.createTopic.id }
            })
          }}
          >

            <DialogTitle id="form-dialog-title">Create a new topic</DialogTitle>
            <DialogContent>
              <DialogContentText classes={{ root: classes.root }}>
                Topics are used to group tags together for related entries. Tags won't be shared accross topics, but you can use a tag with the same name on multiple topics.
              </DialogContentText>
              <FormControl fullWidth disabled={loading} error={error} className={classes.item}>
                <Input
                  autoFocus
                  id="topic-name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="topic name"
                  type="text"
                  classes={{ root: classes.root }}
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth disabled={loading} error={error} className={classes.item}>
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
        )}
      </Mutation>
    )
  }
}

NewTopicDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NewTopicDialog)
