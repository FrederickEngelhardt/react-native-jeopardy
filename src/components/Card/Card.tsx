import React from "react";
import styled, { withTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { black, fadedBlack, grey, yellow } from "../../constants/theming";
import { Theme } from "../RootThemeProvider";

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
  opacity: ${(props) => props.disabled ? 0.2 : 1}
`;

export const RowView = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
`;

const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
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

const BackText = styled(DescriptionText)`
  font-size: 16px;
  margin-bottom: 0;
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
  disabled: boolean;
  handleToggle?: () => void;
  handleBack?: () => void;
  theme: Theme;
}

const Card = ({
  answers,
  answersTextTitle,
  cardState,
  disabled,
  handleToggle,
  handleBack,
  points,
  title,
  theme: { darkMode },
  questionHints
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
            <RowView>
              <SmallTitleText>{answersTextTitle}</SmallTitleText>
              <BackButton focusable accessible onPress={handleBack}>
                <MaterialIcons
                  name={"arrow-back"}
                  color={darkMode ? yellow : black}
                  size={35}
                />
                <BackText>Back</BackText>
              </BackButton>
            </RowView>
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
      disabled={disabled}
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

export default withTheme(Card);
