import React from "react";
import styled from "styled-components";

export const CardContainer = styled.View`
  padding: 12px;
  background-color: ${props => (props.theme.darkMode ? "rgba(0,0,0,.8)" : "#d1d1d1")};
  margin-bottom: 12px;
`;

const PointCardContainer = styled(CardContainer)`
  border-radius: 5px;
`

const TouchableContainer = styled.TouchableOpacity`
  width: 80%;
  align-self: center;
`;

export const TitleText = styled.Text`
  font-size: 38px;
  text-align: center;
  font-weight: 600;
  color: ${props => (props.theme.darkMode ? "#ffe81f" : "#000")};
`;

const QuestionHintTitleText = styled(TitleText)`
  font-size: 24px;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
`;

const QuestionHintDescriptionText = styled(QuestionHintTitleText)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export interface Props {
  isOpened: boolean;
  handleToggle: () => void;
  points: number;
  title: string;
  questionHints: [{ title: string; value: string }];
}

const Card = ({
  isOpened,
  title,
  points,
  questionHints,
  handleToggle
}: Props) => {
  return (
    <TouchableContainer onPress={handleToggle}>
      <PointCardContainer>
        {!isOpened ? (
          <TitleText>{points}</TitleText>
        ) : (
          <>
            {title && <TitleText>{title}</TitleText>}
            {questionHints.map(({ title: hintTitle, value: hintValue }) => {
              return (
                <React.Fragment key={hintTitle}>
                  <QuestionHintTitleText>{hintTitle}</QuestionHintTitleText>
                  <QuestionHintDescriptionText>
                    {hintValue}
                  </QuestionHintDescriptionText>
                </React.Fragment>
              );
            })}
          </>
        )}
      </PointCardContainer>
    </TouchableContainer>
  );
};

Card.defaultProps = {
  isOpened: false
};

export default Card;
