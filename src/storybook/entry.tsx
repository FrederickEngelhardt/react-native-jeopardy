import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  addDecorator,
  getStorybookUI,
  configure
} from "@storybook/react-native";
import { boolean } from "@storybook/addon-knobs";

import "./addons";

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
    <SafeAreaView>{storyFn()}</SafeAreaView>
  </ThemeProvider>
));

// import stories
configure(() => {
  require("./storybook-registry");
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
