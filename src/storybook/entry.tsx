import React from "react";
import { Dimensions, SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  addDecorator,
  configure,
  getStorybookUI
} from "@storybook/react-native";
import { boolean, select } from "@storybook/addon-knobs";

import "./addons";
import { darkGrey, lightBlue } from "../constants/theming";

const { height, width } = Dimensions.get("screen");

const theme = {
  deviceHeight: height,
  deviceWidth: width
};

// Setup root ThemeProvider
addDecorator(storyFn => (
  <ThemeProvider
    theme={{ ...theme, darkMode: boolean("toggle darkMode", true) }}
  >
    <StatusBar hidden={true} />
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: select(
          "blah",
          { darkTheme: darkGrey, lightTheme: lightBlue },
          darkGrey
        )
      }}
    >
      {storyFn()}
    </SafeAreaView>
  </ThemeProvider>
));

// import stories
configure(() => {
  require("./storybook-registry");
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
