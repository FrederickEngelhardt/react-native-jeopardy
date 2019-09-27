import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import styled from "styled-components";

import environment from "../environment";
import Card from "./Card";

const MovieScrollView = styled.ScrollView`
  background-color: #fff;
`;

const ScrollCards = () => {};

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

const MovieCards = () => {
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
    <MovieScrollView contentContainerStyle={styles.container}>
      {generateCard()}
    </MovieScrollView>
  );
};

export default MovieCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
