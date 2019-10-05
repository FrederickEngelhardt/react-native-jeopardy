import React, { PureComponent } from "react";
import { ActivityIndicator, Text } from "react-native";
import { graphql, fetchQuery, QueryRenderer } from "react-relay";
import styled, { withTheme } from "styled-components";

import environment from "../environment";
import Card from "../components/Card/Card";
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
      fetchQuery(environment, homePlanetsQuery, { cursor: "" }).then(data => {
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
    const { darkMode } = this.props.theme;
    const { data } = this.state;

    return data.length > 0 ? (
      <BoardModule categoryColumns={data} />
    ) : (
      <ActivityIndicator />
    );
  }
}

export default withTheme(BoardModuleContainer);
