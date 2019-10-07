import React from "react";
import styled from "styled-components/native";
import { QueryRenderer } from "react-relay";
import { Text } from "react-native";

import environment from "../environment";
import { darkGrey, lightBlue } from "../constants/theming";
import { userQuery } from "../queries/user";

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
    return <FullScreenLoader />;
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
      query={userQuery}
      render={renderProps => renderQuery({ ...renderProps, ...providerProps })}
      variables={{}}
    />
  );
};
export default UserContainer;
