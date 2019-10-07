import { graphql } from "relay-runtime";

export const rootThemeQuery = graphql`
  query rootThemeQuery {
    theme {
      darkMode
    }
    __typename
  }
`;
