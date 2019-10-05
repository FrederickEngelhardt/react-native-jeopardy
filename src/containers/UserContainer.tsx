import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import { ActivityIndicator, Text } from "react-native";
import environment from "../environment";

export interface Theme {
  darkMode: boolean;
  deviceHeight: number;
  deviceWidth: number;
}

interface Props {
  theme: Theme;
  children: React.ReactNode;
}

const renderQuery = ({ error, props, children }) => {
  if (error) {
    return <Text>Failed to load</Text>;
  }
  if (!props) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  console.log('USER QUERY', props)

  return React.cloneElement(children, props);
};

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
    />
  );
};
export default UserContainer;
