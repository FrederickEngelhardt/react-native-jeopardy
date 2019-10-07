import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import { ActivityIndicator, Text } from "react-native";
import environment from "../environment";

interface Props {
  children: React.ReactNode;
}

const renderQuery = ({ error, props, children }) => {
  if (error) {
    return <Text>Failed to load</Text>;
  }
  if (!props) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return React.cloneElement(children, props);
};

/**
 * Use this component to inject user localSchema into any ui-component
 */
const UserContainer = (providerProps: Props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query UserContainerQuery {
          user {
            name
            score
          }
          __typename
        }
      `}
      render={renderProps => renderQuery({ ...renderProps, ...providerProps })}
      variables={{}}
    />
  );
};
export default UserContainer;
