import React from "react";
import styled, { withTheme } from "styled-components";

import NavBar from "../components/Navbar/Navbar";
import BoardModuleContainer from "../containers/BoardModuleContainer";
import { Theme } from "../components/RootThemeProvider";
import { ScrollView, StatusBar } from "react-native";
import UserContainer from "../containers/UserContainer";
import { darkGrey, lightBlue } from "../constants/theming";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => (props.theme.darkMode ? darkGrey : lightBlue)};
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
        <UserContainer>
          <NavBar />
        </UserContainer>
        <ScrollView>
          <BoardModuleContainer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(HomeScreen);
