import React from "react";
import { Dimensions } from "react-native";
import { RelayEnvironmentProvider } from "relay-hooks";
import styled from "styled-components";

import NavBar from "../components/Navbar";
import MovieCards from "../components/MovieCards";
import environment from "../environment";
import RootThemeProvider from "../components/RootThemeProvider";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const RootScreen = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <RootThemeProvider>
        <SafeAreaView>
          <NavBar />
          <MovieCards />
        </SafeAreaView>
      </RootThemeProvider>
    </RelayEnvironmentProvider>
  );
};

export default RootScreen;
