import gql from 'graphql-tag'

const ALL_TOPICS_QUERY = gql`
  query ALL_TOPICS_QUERY($first: Int = 25) {
    topics(first: $first, orderBy: title_DESC) {
      id
      title
    }
  }
`
export { ALL_TOPICS_QUERY }
