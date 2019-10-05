import React from "react";
import styled from "styled-components";

import { black, fadedBlack, grey, yellow } from "../../constants/theming";

export const CardContainer = styled.View`
  padding: 12px;
  background-color: ${props => (props.theme.darkMode ? fadedBlack : grey)};
  margin-bottom: 12px;
`;

const PointCardContainer = styled(CardContainer)`
  border-radius: 5px;
`;

const TouchableContainer = styled.TouchableOpacity`
  width: 80%;
  align-self: center;
`;

export const TitleText = styled.Text`
  font-size: 38px;
  text-align: center;
  font-weight: 600;
  color: ${props => (props.theme.darkMode ? yellow : black)};
`;

const SmallTitleText = styled(TitleText)`
  font-size: 24px;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
`;

const DescriptionText = styled(SmallTitleText)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

type QuestionHint = { title: string; value: string };

export interface CardProps {
  answers: Array<string>;
  points: number;
  title: string;
  questionHints: Array<QuestionHint>;
}

export const QUESTION_STATE = "question";
export const ANSWER_STATE = "answer";

export type CardState = null | typeof QUESTION_STATE | typeof ANSWER_STATE;

interface Props extends CardProps {
  answersTextTitle?: string;
  cardState?: CardState;
  handleToggle?: () => void;
}

const Card = ({
  answers,
  answersTextTitle,
  cardState,
  title,
  points,
  questionHints,
  handleToggle
}: Props) => {
  const renderCardState = () => {
    switch (cardState) {
      case null: {
        return <TitleText>{points}</TitleText>;
      }
      case QUESTION_STATE: {
        return (
          <>
            {title && <TitleText>{title}</TitleText>}
            {questionHints.map(({ title: hintTitle, value: hintValue }) => {
              return (
                <React.Fragment key={hintTitle}>
                  <SmallTitleText>{hintTitle}</SmallTitleText>
                  <DescriptionText>{hintValue}</DescriptionText>
                </React.Fragment>
              );
            })}
          </>
        );
      }
      case ANSWER_STATE: {
        return (
          <>
            <SmallTitleText>{answersTextTitle}</SmallTitleText>
            {answers.map(answer => (
              <DescriptionText key={answer}>{answer}</DescriptionText>
            ))}
          </>
        );
      }
    }
  };

  return (
    <TouchableContainer
      activeOpacity={cardState !== null ? 1 : 0.5}
      onPress={handleToggle}
    >
      <PointCardContainer>{renderCardState()}</PointCardContainer>
    </TouchableContainer>
  );
};

Card.defaultProps = {
  answersTextTitle: "Answers",
  isOpened: false,
  cardState: null
};

export default Card;
