import cardProps from "../Card/Card.props";
import categoryHeadlineCardProps from "../CategoryHeadlineCard/CategoryHeadlineCard.props";
const categoryColumnProps = {
  cards: [
    {
      points: 100,
      isOpened: false,
      questionText: "Last apprentice of Yoda."
    },
    {
      points: 200,
      isOpened: false,
      questionText: "First apprentice of Obi Wan Kenobi?"
    },
    {
      points: 300,
      isOpened: false,
      questionText: "Apprentice of qui gon jinn"
    },
    {
      points: 400,
      isOpened: false,
      questionText: "Apprentice of Mace Windu?"
    },
    {
      points: 500,
      isOpened: false,
      questionText: "Apprentice of Plagueis?"
    },
  ],
  headlineCard: { title: "Apprentices" }
};

export default categoryColumnProps;
