import { graphql, fetchQuery } from "react-relay";
import environment from "../environment";

export const fetchCharacterHomeWorld = async () => {
  try {
    const data = await fetchQuery(environment, characterHomeworldQuery, {})
    return formatCharacterHomeworldQuery(data);
  } catch (e) {
    console.warn(e);
  }
}

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

export const formatCharacterHomeworldQuery = (data: any) => {
  const pointsArray = [100, 200, 300, 400, 500];

  const cards = pointsArray.map((points: number, index: number) => {
    const {
      filmConnection,
      climates,
      terrains,
      id,
      name: planetName,
      residentConnection
    } = data.allPlanets.planets[index];

    switch (true) {
      case residentConnection.residents > 1: {
        const {
          name,
          gender,
          species: { name: speciesName }
        } = residentConnection.residents;
        const questionString = `Gender: ${gender}\nPlanet: ${planetName}\nSpecies: ${speciesName} `;
        return {
          points,
          answers: [name],
          questionHints: [
            { title: "gender", value: gender },
            { title: "planet", value: planetName },
            { title: "species", value: speciesName }
          ]
        };
      }
      case filmConnection.films.length > 1: {
        const filmList = filmConnection.films
          .map(({ title }) => title)
          .join(",\n");

        return {
          points,
          answers: [planetName],
          questionHints: [
            { title: "climate", value: climates.join(",\n") },
            { title: "films", value: filmList }
          ]
        };
      }
      default: {
        return {
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
      }
    }
  });

  return {
    cards,
    headlineCard: { title: "Character Homeworld" }
  };
};
