import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import Head from 'next/head'
import Error from './ErrorMessage'

const SINGLE_TOPIC_QUERY = gql`
  query SINGLE_TOPIC_QUERY($id: ID!) {
    topic(where: { id: $id }) {
      id
      name
      description
    }
  }
`
class SingleTopic extends Component {
  render() {
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
                <name>
                  Sick Fits |
                  {' '}
                  {topic.name}
                </name>
              </Head>
              <div>
                <h2>
                  Viewing
                  {' '}
                  {topic.name}
                </h2>
                <p>{topic.description}</p>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default SingleTopic
