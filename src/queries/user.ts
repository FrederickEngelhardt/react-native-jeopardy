import { graphql } from "relay-runtime";

export const userQuery = graphql`
  query userQuery {
    user {
      name
      score
    }
    __typename
  }
`
