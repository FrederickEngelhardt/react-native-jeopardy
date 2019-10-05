import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { Animated, StyleSheet } from "react-native";

import { Theme } from "../RootThemeProvider";
import { toggleDarkMode } from "../../store/themeStore";
import { black, lightBlue, white, yellow } from "../../constants/theming";

const NavBarContainer = styled.View`
  background-color: ${props => (props.theme.darkMode ? black : lightBlue)};
  height: ${({ theme }) => theme.deviceHeight / 10};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  width: ${({ theme }) => theme.deviceWidth};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const ScoreContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AppTitleText = styled.Text`
  font-size: 28px;
  font-weight: 900;
  color: ${({ theme }) => (theme.darkMode ? white : black)};
`;

const ScoreText = styled(AppTitleText)`
  font-size: 18px;
  margin-right: 12px;
`;

const DarkLightSwitch = styled.Switch.attrs(() => ({
  trackColor: { true: white, false: white },
  thumbColor: black
}))`
  width: 50px;
`;

const styles = StyleSheet.create({
  text: {
    fontWeight: "900"
  }
});

const TITLE_TEXT = "Jeopardy";
const SCORE_TEXT = "Score";

interface Props {
  user: { score: number };
  scoreText: string;
  theme: Theme;
  titleText: string;
  toggleDarkMode(boolean): void;
}

const NavBar = (props: Props) => {
  const {
    user: { score },
    scoreText,
    theme: { darkMode },
    titleText,
    toggleDarkMode
  } = props;

  const animatedScoreValue = new Animated.Value(0);

  const animateScore = () => {
    if (score > 0) {
      Animated.spring(animatedScoreValue, {
        toValue: 1
      }).start();
    }
  };

  useEffect(() => {
    animateScore();
  }, [score]);

  return (
    <NavBarContainer>
      <AppTitleText>{titleText}</AppTitleText>
      <ScoreContainer>
        <ScoreText>{scoreText}</ScoreText>
        <Animated.Text
          style={[
            {
              fontSize: animatedScoreValue.interpolate({
                inputRange: [0, 0.9, 1],
                outputRange: [24, 30, 24],
                extrapolate: "clamp"
              }),
              color: darkMode ? white : black
            },
            styles.text
          ]}
        >
          {score}
        </Animated.Text>
      </ScoreContainer>
      <DarkLightSwitch
        onChange={() => toggleDarkMode(darkMode)}
        value={darkMode}
      />
    </NavBarContainer>
  );
};

NavBar.defaultProps = {
  titleText: TITLE_TEXT,
  scoreText: SCORE_TEXT,
  toggleDarkMode: darkMode => toggleDarkMode(!darkMode)
};

export default withTheme(NavBar);
