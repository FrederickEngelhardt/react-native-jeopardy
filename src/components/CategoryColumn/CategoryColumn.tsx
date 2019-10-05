import React from "react";
import styled from "styled-components";

import Card, { Props as CardProps } from "../Card/Card";
import CategoryHeadlineCard, {
  Props as HeadlineCardProps
} from "../CategoryHeadlineCard/CategoryHeadlineCard";
interface Props {
  headlineCard: HeadlineCardProps;
  cards: [CardProps];
}

interface State {
  activeCardId: number | null;
}

class CategoryColumn extends React.PureComponent<Props, State> {
  state = {
    activeCardId: null
  }
  render() {
    const { cards, headlineCard } = this.props;
    const { activeCardId} = this.state
    return (
      <>
        <CategoryHeadlineCard {...headlineCard} />
        {cards.map((props: CardProps) => (
          <Card
            {...props}
            key={props.points}
            isOpened={activeCardId === props.points}
            handleToggle={() => this.setState({ activeCardId: props.points})}
          />
        ))}
      </>
    );
  }
}

export default CategoryColumn;
