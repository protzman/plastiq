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

class NewTopicDialog extends Component {
  state = {
    title: '',
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
      <Mutation
        mutation={CREATE_TOPIC_MUTATION}
        variables={this.state}
        refetchQueries={["ALL_TOPICS_QUERY"]}
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
                Topics are used to group tags together for related entries. Tags won't be shared accross topics, but you can use a tag with the same title on multiple topics.
              </DialogContentText>
              <FormControl fullWidth disabled={loading} error={error} className={classes.item}>
                <Input
                  autoFocus
                  id="topic-title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="topic title"
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
