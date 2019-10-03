import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import styled, { withTheme } from "styled-components";

import environment from "../environment";
import Card from "../components/Card/Card";
import { Theme } from "../components/RootThemeProvider";

// Looks like .attrs does not work for scrollview
const MoviesView = styled.View`
  background-color: ${props => (props.theme.darkMode ? "#494949" : "#fff")};
  flex: 1;
`;

const renderQuery = ({ error, props }) => {
  if (error) {
    return <Text>Failed to load</Text>;
  }
  if (!props) {
    return <ActivityIndicator />;
  }

  return props.allFilms.edges.map(({ node }) => (
    <Card key={node.id} title={node.title} />
  ));
};

interface Props {
  theme: Theme;
}

const MovieCards = (props: Props) => {
  const { darkMode } = props.theme;
  const generateCard = () => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query MovieCardsQuery {
          allFilms {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `}
      render={renderQuery}
    />
  );

  return (
    <MoviesView>
      {generateCard()}
    </MoviesView>
  );
};

export default withTheme(MovieCards);

const styles = StyleSheet.create({
  container: darkMode => ({
    flex: 1,
    flexGrow: 1,
    backgroundColor: darkMode ? "#494949" : "#fff",
    justifyContent: 'center'
  })
});
