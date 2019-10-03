import React from "react";
import styled, { withTheme } from "styled-components";

import NavBar from "../components/Navbar";
import MovieCards from "../containers/MovieCards";
import { Theme } from "../components/RootThemeProvider";
import { ScrollView, StatusBar, View } from "react-native";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => (props.theme.darkMode ? "#000000" : "#64d3ff")};
`;

interface Props {
  theme: Theme;
}

const HomeScreen = (props: Props) => {
  const { darkMode } = props.theme;
  return (
    <>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <SafeAreaView>
        <NavBar />
        <ScrollView>
          <MovieCards />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(HomeScreen);
