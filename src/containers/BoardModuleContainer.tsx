import React, { PureComponent } from "react";
import { ActivityIndicator } from "react-native";
import { fetchQuery } from "react-relay";

import environment from "../environment";
import { Theme } from "../components/RootThemeProvider";
import BoardModule from "../components/BoardModule/BoardModule";
import {
  formatHomePlanetQuery,
  homePlanetsQuery
} from "../queries/jeopardyColumnTopics";

interface Props {
  theme: Theme;
}

interface State {
  data: [any];
}

class BoardModuleContainer extends PureComponent<Props> {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetch();
  }

  fetch = async () => {
    try {
      fetchQuery(environment, homePlanetsQuery, {}).then(data => {
        const formattedData = formatHomePlanetQuery(data);
        this.setState((state: State) => ({
          data: [...state.data, formattedData]
        }));
      });
    } catch (e) {
      console.warn(e);
    }
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
