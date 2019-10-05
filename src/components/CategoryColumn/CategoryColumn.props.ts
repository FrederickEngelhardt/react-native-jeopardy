import cardProps from "../Card/Card.props";
import categoryHeadlineCardProps from "../CategoryHeadlineCard/CategoryHeadlineCard.props";

const categoryColumnProps = {
  cards: [
    {
      points: 100,
      isOpened: false,
      questionHints: [{title: 'Apprentice', value: 'Last apprentice of Yoda'}]
    },
    {
      points: 200,
      isOpened: false,
      questionHints: [{title: 'Apprentice', value: "First apprentice of Obi Wan Kenobi?"}]
    },
    {
      points: 300,
      isOpened: false,
      questionHints: [{title: 'Apprentice', value: "Apprentice of qui gon jinn"}]
    },
    {
      points: 400,
      isOpened: false,
      questionHints: [{title: 'Apprentice', value: "Apprentice of Mace Windu?"}]
    },
    {
      points: 500,
      isOpened: false,
      questionHints: [{title: 'Apprentice', value: "Apprentice of Plagueis?"}]
    },
  ],
  headlineCard: { title: "Apprentices" }
};

export default categoryColumnProps;
