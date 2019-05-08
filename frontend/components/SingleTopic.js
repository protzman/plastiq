import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Head from 'next/head'
import Divider from '@material-ui/core/Divider'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import Error from './ErrorMessage'

const SINGLE_TOPIC_QUERY = gql`
  query SINGLE_TOPIC_QUERY($id: ID!) {
    topic(where: { id: $id }) {
      id
      title
      description
    }
  }
`

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
})

class SingleTopic extends Component {
  render() {
    const { classes } = this.props
    return (
      <Query
        query={SINGLE_TOPIC_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />
          if (loading) return <p>loading...</p>
          if (!data.topic) {
            return (
              <p>
                no item found for
                {' '}
                {this.props.id}
              </p>
            )
          }
          const { topic } = data
          return (
            <div>
              <Head>
                <title>
                  Sequense |
                  {' '}
                  {topic.title}
                </title>
              </Head>
              <div>
                <h2>
                  Viewing
                  {' '}
                  {topic.title}
                </h2>
                <p>{topic.description}</p>
              </div>
              <Divider />
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                <NoteAddIcon />
              </Fab>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default withStyles(styles)(SingleTopic)
