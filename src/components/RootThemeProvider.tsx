import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import { ThemeProvider } from "styled-components";
import { ActivityIndicator, Dimensions, Text } from "react-native";
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

const RootThemeProvider = (providerProps: Props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query RootThemeProviderQuery {
          theme {
            darkMode
          }
          __typename
        }
      `}
      render={renderProps => renderQuery({ ...renderProps, ...providerProps })}
    />
  );
};
export default RootThemeProvider;
