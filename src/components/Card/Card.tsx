import React from "react";
import styled from "styled-components";

const CardContainer = styled.View`
  padding: 24px;
  background-color: ${props => (props.theme.darkMode ? "#6B6B6B" : "#d1d1d1")};
  // width: 80%;
  border-radius: 5px;
`;

const TouchableContainer = styled.TouchableOpacity`
  width: 80%;
  align-self: center;
`;

const TitleText = styled.Text`
  font-size: 38px;
  text-align: center;
  color: ${props => (!props.theme.darkMode ? "#000" : "#fff")};
`;

const QuestionText = styled(TitleText)`
  font-size: 24px;
`;

export const closed = "CLOSED";
export const opened = "OPENED";

interface Props {
  isOpened: boolean
  handleToggle: () => void;
  points: number
  title: string
  questionText: string,
}

const Card = ({ isOpened, title, points, questionText, handleToggle }: Props) => {
  return (
    <TouchableContainer onPress={handleToggle}>
      <CardContainer>
        {!isOpened ? (
          <TitleText>{points}</TitleText>
        ) : (
          <>
            <TitleText>{title}</TitleText>
            <QuestionText>{questionText}</QuestionText>
          </>
        )}
      </CardContainer>
    </TouchableContainer>
  );
};

Card.defaultProps = {
  isOpened: false
}

export default Card;
