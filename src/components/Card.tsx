import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../environment";

export default function Card() {
  return (
    <View style={styles.container}>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CardQuery {
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
        render={({ error, props }) => {
          if (error) {
            console.warn(error);
            return <Text>Failed</Text>;
          }
          if (!props) {
            return <Text>Loading...</Text>;
          }
          console.log(props);
          return (
            <>
            {props.allFilms.edges.map(({ node }) => {
              console.log(node.title)
              return <Text key={node.id}>{node.title}</Text>
            })}
            </>
            )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
