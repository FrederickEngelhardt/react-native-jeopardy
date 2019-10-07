import React from "react";
import { QueryRenderer } from "react-relay";
import { ThemeProvider } from "styled-components/native";
import { ActivityIndicator, Dimensions, Text } from "react-native";
import environment from "../environment";
import { rootThemeQuery } from "../queries/rootTheme";

export interface Theme {
  darkMode: boolean;
  deviceHeight: number;
  deviceWidth: number;
}

interface Props {
  children: React.ReactNode;
}

const { height, width } = Dimensions.get("screen");

const renderQuery = ({ error, props, children }) => {
  if (error) {
    return <Text>Failed to load</Text>;
  }
  if (!props) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  const theme: Theme = {
    darkMode: props.theme.darkMode,
    deviceHeight: height,
    deviceWidth: width
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const RootThemeProvider = (providerProps: Props) => (
  <QueryRenderer
    environment={environment}
    query={rootThemeQuery}
    render={renderProps => renderQuery({ ...renderProps, ...providerProps })}
    variables={{}}
  />
);

export default RootThemeProvider;
