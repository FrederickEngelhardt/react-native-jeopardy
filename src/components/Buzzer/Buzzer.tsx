import React from "react";
import styled from "styled-components/native";

import { black, grey, white, yellow } from "../../constants/theming";
import { TitleText } from "../Card/Card";
import { Theme } from "../../containers/RootThemeProvider";

const BuzzerBox = styled.View`
  background-color: ${({ theme }) => (theme.darkMode ? yellow : white)};
  width: 85;
  height: 85;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
const BuzzerButton = styled.TouchableHighlight.attrs(props => ({
  underlayColor: black
}))`
  background-color: ${({ theme }) => (theme.darkMode ? white : grey)};
  border-color: black;
  border-width: 3px;
  border-radius: 50px;
  height: 75;
  width: 75;
  justify-content: center;
`;

const BuzzerText = styled(TitleText)`
  font-size: 18px;
  color: ${props => (props.theme.darkMode ? black : black)};
`;

interface Props {
  handleClick?: () => void;
  theme?: Theme;
  title?: string;
}

const Buzzer = ({ title, handleClick }: Props) => {
  return (
    <BuzzerBox>
      <BuzzerButton
        accessible
        acessibilityLabel="Jeopardy Buzzer"
        onPress={handleClick}
      >
        <BuzzerText>{title}</BuzzerText>
      </BuzzerButton>
    </BuzzerBox>
  );
};

Buzzer.defaultProps = {
  title: "Buzzer"
};

export default Buzzer;
