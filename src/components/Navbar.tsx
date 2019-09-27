import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Theme } from "../screens/RootScreen";
import { toggleDarkMode } from "../store/themeStore";

const NavBarContainer = styled.View`
  background-color: ${props => (props.theme.darkMode ? "#000000" : "#64d3ff")}
  height: ${({ theme }) => theme.deviceHeight / 10}
  margin-top: 12px;
  padding: 12px;
  width: ${({ theme }) => theme.deviceWidth}
  justify-content: space-between;
  flex-direction: row;
`;

const AppTitleText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: #fff;
  height: 100%;
`;

const DarkLightSwitch = styled.Switch`
  height: 100%;
  width: 50px;
`;

const TITLE = "SWAPI";

interface Props {
  theme: Theme;
}

const NavBar = (props: Props) => {
  const { darkMode } = props.theme;
  return (
    <NavBarContainer>
      <AppTitleText>{TITLE}</AppTitleText>
      <DarkLightSwitch
        onChange={() => toggleDarkMode(!darkMode)}
        value={darkMode}
      />
    </NavBarContainer>
  );
};

export default withTheme(NavBar);
