import React from "react";
import styled from "styled-components";

import Buzzer from "../Buzzer";
import Card, {
  ANSWER_STATE,
  CardProps,
  CardState,
  QUESTION_STATE
} from "../Card/Card";
import CategoryHeadlineCard, {Props as HeadlineCardProps} from "../CategoryHeadlineCard/CategoryHeadlineCard";
import {updateUserScore} from "../../store/userStore";
import {black, white} from "../../constants/theming";

const ColumnView = styled.View`
  width: ${({ theme }) => theme.deviceWidth};
`;

const RowView = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 12px;
`;

const CountText = styled.Text`
  text-align: center;
  font-size: 64px;
  font-weight: 900;
  color: ${({ theme }) => (theme.darkMode ? white : black)};
  // margin: 12px;
  padding: 12px;
`;

export interface Props {
  readonly cards: [CardProps];
  headlineCard: HeadlineCardProps;
  updateUserScore(number): void;
}

interface State {
  activeCardId: number | null;
  activeCardState: CardState;
  completedCards: Set<number>;
  hasTimer: boolean;
  timerCount: number;
}

class CategoryColumn extends React.PureComponent<Props, State> {
  static defaultProps = {
    updateUserScore
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
    const { timerCount, activeCardId } = this.state;
    const { updateUserScore } = this.props;
    if (timerCount === 0) {
      clearInterval(this.timer);
      this.state.completedCards.add(activeCardId);
      this.setState({ hasTimer: false, timerCount: 15, activeCardId: null });
    }
  }

  startTimerAnimation = () => {
    this.timer = setInterval(() => {
      this.setState(({ timerCount }) => ({ timerCount: timerCount - 1 }));
    }, 1000);
  };

  handleCardOpen = activeCardId => {
    this.setState({ activeCardId, activeCardState: QUESTION_STATE, hasTimer: true });
    this.startTimerAnimation();
  };

  handleBuzzerClick = () => {
    const { activeCardId } = this.state;
    // updateUserScore(activeCardId);
    clearInterval(this.timer)
    // this.state.completedCards.add(activeCardId);
    this.setState({ hasTimer: false, timerCount: 15, activeCardState: ANSWER_STATE });
  };

  renderCountdownInterface = () => {
    const { timerCount } = this.state;
    return (
      <RowView>
        <CountText>{timerCount}</CountText>
        <Buzzer handleClick={this.handleBuzzerClick} />
      </RowView>
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
        {cards
          .filter(({ points }) => !completedCards.has(points))
          .map((props: CardProps) =>
            !activeCardId ? (
              <Card
                {...props}
                key={props.points}
                handleToggle={() => this.handleCardOpen(props.points)}
              />
            ) : (
              props.points === activeCardId && (
                <Card
                  key={props.points}
                  {...props}
                  cardState={activeCardState}
                />
              )
            )
          )}
      </ColumnView>
    );
  }
}

export default CategoryColumn;
