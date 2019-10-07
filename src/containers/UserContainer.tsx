import React from "react";
import styled from "styled-components/native";
import { graphql, QueryRenderer } from "react-relay";
import { Text } from "react-native";
import environment from "../environment";
import { darkGrey, lightBlue } from "../constants/theming";

interface Props {
  children: React.ReactNode;
}

export const FullScreenLoader = styled.ActivityIndicator`
  flex: 1;
  background-color: ${props => (props.theme.darkMode ? darkGrey : lightBlue)};
`;

const renderQuery = ({ error, props, children }) => {
  if (error) {
    return <Text>Failed to load</Text>;
  }
  if (!props) {
    return <FullScreenLoader style={{ flex: 1 }} />;
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
