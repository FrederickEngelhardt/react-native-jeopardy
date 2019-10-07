import { graphql, fetchQuery } from "react-relay";
import environment from "../environment";
import { characterHomeworldQueryResponse } from "../__generated__/characterHomeworldQuery.graphql";

export const fetchCharacterHomeWorld = async () => {
  try {
    const data: any = await fetchQuery(
      environment,
      characterHomeworldQuery,
      {}
    );
    return formatCharacterHomeworldQuery(data);
  } catch (e) {
    return null
  }
};

export const characterHomeworldQuery = graphql`
  query characterHomeworldQuery($cursor: String) {
    allPlanets(first: 5, after: $cursor) {
      planets {
        id
        name
        terrains
        climates
        residentConnection(first: 1) {
          residents {
            gender
            name
            species {
              name
            }
          }
        }
        filmConnection {
          films {
            title
          }
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

export const formatCharacterHomeworldQuery = (
  data: characterHomeworldQueryResponse
) => {
  const pointsArray = [100, 200, 300, 400, 500];

  const cards = pointsArray.map((points: number, index: number) => {
    const {
      filmConnection,
      climates,
      terrains,
      name: planetName,
      residentConnection
    } = data.allPlanets.planets[index];

    const card = {
      points,
      answers: [planetName],
      questionHints: [
        {
          title: "climate",
          value: climates.join(",\n")
        },
        { title: "terrain", value: terrains.join(", \n") }
      ]
    };

    switch (true) {
      case residentConnection.residents.length > 0:
        const characterList = residentConnection.residents
          .map(({ name }) => name)
          .join(",\n");
        card.questionHints.push({ title: "characters", value: characterList });
        break;
      case filmConnection.films.length > 1:
        const filmList = filmConnection.films
          .map(({ title }) => title)
          .join(",\n");
        card.questionHints.push({ title: "films", value: filmList });
    }

    return card;
  });

  return {
    cards,
    headlineCard: { title: "Character Homeworld" }
  };
};
