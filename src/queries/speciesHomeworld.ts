import { graphql, fetchQuery } from "react-relay";
import environment from "../environment";
import {speciesHomeworldQueryResponse} from "../__generated__/speciesHomeworldQuery.graphql";

export const fetchSpeciesHomeworld = async () => {
  try {
    const data: any = await fetchQuery(environment, speciesHomeworldQuery, {})
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

export const formatSpeciesHomeworldQuery = (data: speciesHomeworldQueryResponse) => {
  const pointsArray = [100, 200, 300, 400, 500];

  const cards = pointsArray.map((points: number, index: number) => {
    if (!data.allSpecies.species){
      return null
    }

    const {
      name: speciesName,
      homeworld
    } = data.allSpecies.species[index]

    const homeworldName = homeworld ? homeworld.name : "No homeworld"

    return {
      points,
      answers: [homeworldName],
      questionHints: [
        { title: "Species", value: speciesName },
      ]
    };
  }).filter(card => card) // remove potential null values

  return {
    cards,
    headlineCard: { title: "Species Homeworld" }
  };
}
