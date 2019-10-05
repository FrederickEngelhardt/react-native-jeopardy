import React from "react";
import styled from "styled-components";

import Card, { Props as CardProps } from "../Card/Card";
import CategoryHeadlineCard, {
  Props as HeadlineCardProps
} from "../CategoryHeadlineCard/CategoryHeadlineCard";
import { updateUserScore } from "../../store/userStore";
import { black, white } from "../../constants/theming";

const ColumnView = styled.View`
  width: ${({ theme }) => theme.deviceWidth};
`;

const CountText = styled.Text`
  text-align: center;
  font-size: 64px;
  font-weight: 900;
  color: ${({ theme }) => (theme.darkMode ? white : black)};
  margin: 12px;
`;

export interface Props {
  cards: [CardProps];
  headlineCard: HeadlineCardProps;
  updateUserScore(number): void;
}

interface State {
  activeCardId: number | null;
  completedCards: Set<number>;
  hasTimer: boolean;
  timerCount: number;
}

class CategoryColumn extends React.PureComponent<Props, State> {
  static defaultProps = {
    updateUserScore
  }
  state: State = {
    activeCardId: null,
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
      updateUserScore(activeCardId);
      this.state.completedCards.add(activeCardId);
      this.setState({ hasTimer: false, timerCount: 15, activeCardId: null });
    }
  }

  startTimerAnimation = () => {
    this.timer = setInterval(() => {
      this.setState(({ timerCount }) => ({ timerCount: timerCount - 1 }));
    }, 100);
  };

  handleCardOpen = activeCardId => {
    this.setState({ activeCardId, hasTimer: true });
    this.startTimerAnimation();
  };

  render() {
    const { cards, headlineCard } = this.props;
    const { activeCardId, hasTimer, timerCount, completedCards } = this.state;
    return (
      <ColumnView>
        <CategoryHeadlineCard {...headlineCard} />
        {hasTimer && <CountText>{timerCount}</CountText>}
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
                <Card {...props} key={props.points} isOpened />
              )
            )
          )}
      </ColumnView>
    );
  }
}

export default CategoryColumn;
