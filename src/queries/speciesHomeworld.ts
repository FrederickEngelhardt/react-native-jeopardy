import { graphql, fetchQuery } from "react-relay";
import environment from "../environment";

export const fetchSpeciesHomeworld = async () => {
  try {
    const data = await fetchQuery(environment, speciesHomeworldQuery, {})
    return formatSpeciesHomeworldQuery(data);
  } catch (e) {
    console.warn(e);
  }
}

export const speciesHomeworldQuery = graphql`
  query speciesHomeworldQuery($cursor: String) {
    allSpecies(first: 5 after: $cursor) {
      species {
        name
        homeworld {
          name
        }
      }
    }
  }
`;

export const formatSpeciesHomeworldQuery = (data: any) => {
  const pointsArray = [100, 200, 300, 400, 500];


  const cards = pointsArray.map((points: number, index: number) => {
    const {
      name: speciesName,
      homeworld
    } = data.allSpecies.species[index]

    const homeworldName = homeworld ? homeworld.name : null

    return {
      points,
      answers: [homeworldName],
      questionHints: [
        { title: "Species", value: speciesName },
      ]
    };
  })

  return {
    cards,
    headlineCard: { title: "Species Homeworld" }
  };
}
