import gql from 'graphql-tag'

export const GetUser = gql`
  query MyQuery {
    queryUser(first: 10) {
      userId
      name
    }
  }
`
