import React from "react";

import { Theme } from "./RootThemeProvider";
import BoardModule from "../components/BoardModule/BoardModule";
import { fetchCharacterHomeWorld } from "../queries/characterHomeworld";
import { fetchSpeciesHomeworld } from "../queries/speciesHomeworld";
import { Props as CategoryColumnProps } from "../components/CategoryColumn/CategoryColumn";
import {FullScreenLoader} from "./UserContainer";

interface Props {
  theme?: Theme;
}

interface State {
  data: Array<CategoryColumnProps>
}

const queries = [fetchCharacterHomeWorld, fetchSpeciesHomeworld]

class BoardModuleContainer extends React.PureComponent<Props> {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchAll();
  }

  fetchAll = () => {
    queries.forEach( async (query) => {
      const data = await query()
      if (!data){
        return
      }
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
      <FullScreenLoader />
    );
  }
}

export default BoardModuleContainer;
