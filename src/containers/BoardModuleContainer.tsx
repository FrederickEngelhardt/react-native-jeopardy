import React, { PureComponent } from "react";
import { ActivityIndicator } from "react-native";

import { Theme } from "../components/RootThemeProvider";
import BoardModule from "../components/BoardModule/BoardModule";
import { fetchCharacterHomeWorld } from "../queries/characterHomeworld";
import { fetchSpeciesHomeworld } from "../queries/speciesHomeworld";

interface Props {
  theme: Theme;
}

interface State {
  data: [any];
}

const queries = [fetchCharacterHomeWorld, fetchSpeciesHomeworld]

class BoardModuleContainer extends PureComponent<Props> {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchAll();
  }

  fetchAll = () => {
    queries.forEach( async (query) => {
      const data = await query()
      this.setState((state: State) => ({
        data: [...state.data, data]
      }));
    })
  };

  render() {
    const { data } = this.state;

    return data.length > 0 ? (
      <BoardModule categoryColumns={data} />
    ) : (
      <ActivityIndicator />
    );
  }
}

export default BoardModuleContainer;
