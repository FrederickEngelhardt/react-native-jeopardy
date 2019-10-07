import React from "react";
import styled from "styled-components/native";

import Buzzer from "../Buzzer/Buzzer";
import Card, {
  ANSWER_STATE,
  CardProps,
  CardState,
  QUESTION_STATE,
  RowView
} from "../Card/Card";
import CategoryHeadlineCard, {
  Props as HeadlineCard
} from "../CategoryHeadlineCard/CategoryHeadlineCard";
import { updateUserScore } from "../../store/userStore";
import { black, white } from "../../constants/theming";
import { Theme } from "../RootThemeProvider";

const ColumnView = styled.View`
  width: ${({ theme }) => theme.deviceWidth};
`;

const TimerView = styled(RowView)`
  width: 80%;
`;

const WinButton = styled.TouchableHighlight`
  height: 80px
  flex: 1;
  margin-right: 12px;
  background-color: green;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const LossButton = styled(WinButton)`
  margin-left: 12px;
  margin-right: 0px;
  background-color: red;
`;

const WinLossText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${white};
`;

const CountText = styled.Text`
  text-align: center;
  font-size: 64px;
  font-weight: 900;
  color: ${({ theme }) => (theme.darkMode ? white : black)};
  padding: 12px;
`;

export interface Props {
  theme?: Theme;
  cards: [CardProps];
  headlineCard: HeadlineCard;
  updateScore?: (number) => void;
}

interface State {
  activeCardId: number | null;
  activeCardState: CardState;
  completedCards: Set<number>;
  hasTimer: boolean;
  timerCount: number;
}

const WIN_MODIFIER = 1;
const LOSS_MODIFIER = -0.5;

class CategoryColumn extends React.PureComponent<Props, State> {
  static defaultProps = {
    updateScore: updateUserScore
  };

  state: State = {
    activeCardId: null,
    activeCardState: null,
    completedCards: new Set(),
    hasTimer: false,
    timerCount: 15
  };

  timer = null;

  componentWillUnmount(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidUpdate(): void {
    const { timerCount } = this.state;
    if (timerCount <= 0) {
      clearInterval(this.timer);
      this.setState({
        hasTimer: false,
        timerCount: 15
      });
      this.handleWinLossClick(false);
    }
  }

  startTimerAnimation = () => {
    this.timer = setInterval(() => {
      this.setState(({ timerCount }) => ({ timerCount: timerCount - 1 }));
    }, 1000);
  };

  handleCardOpen = activeCardId => {
    this.setState({
      activeCardId,
      activeCardState: QUESTION_STATE,
      hasTimer: true
    });
    this.startTimerAnimation();
  };

  handleBack = () => {
    this.handleWinLossClick(false);
  };

  handleBuzzerClick = () => {
    clearInterval(this.timer);
    this.setState({
      hasTimer: false,
      timerCount: 15,
      activeCardState: ANSWER_STATE
    });
  };

  handleWinLossClick = (hasWon: boolean) => {
    const { activeCardId } = this.state;
    const { updateScore } = this.props;

    const scoreModifier =
      activeCardId * (hasWon ? WIN_MODIFIER : LOSS_MODIFIER);
    updateScore(scoreModifier);

    this.state.completedCards.add(activeCardId);
    this.setState({ activeCardId: null, activeCardState: null });
  };

  renderWinLossInterface = () => {
    return (
      <TimerView>
        <WinButton
          accessible
          accessibilityLabel="Click if you won"
          onPress={() => this.handleWinLossClick(true)}
        >
          <WinLossText>Win</WinLossText>
        </WinButton>
        <LossButton
          accessible
          accessibilityLabel="Click if you lost"
          onPress={() => this.handleWinLossClick(false)}
        >
          <WinLossText>Lost</WinLossText>
        </LossButton>
      </TimerView>
    );
  };

  renderCountdownInterface = () => {
    const { timerCount } = this.state;
    return (
      <TimerView>
        <CountText>{timerCount}</CountText>
        <Buzzer handleClick={this.handleBuzzerClick} />
      </TimerView>
    );
  };

  render() {
    const { cards, headlineCard } = this.props;
    const {
      activeCardId,
      activeCardState,
      hasTimer,
      completedCards
    } = this.state;
    return (
      <ColumnView>
        <CategoryHeadlineCard {...headlineCard} />
        {hasTimer && this.renderCountdownInterface()}
        {cards.map((props: CardProps) =>
          !activeCardId ? (
            <Card
              {...props}
              disabled={completedCards.has(props.points)}
              key={props.points}
              handleToggle={() => this.handleCardOpen(props.points)}
            />
          ) : (
            props.points === activeCardId && (
              <Card
                key={props.points}
                {...props}
                cardState={activeCardState}
                handleBack={this.handleBack}
              />
            )
          )
        )}
        {activeCardState === ANSWER_STATE && this.renderWinLossInterface()}
      </ColumnView>
    );
  }
}

export default CategoryColumn;
