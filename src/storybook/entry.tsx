import React from "react";
import { ThemeProvider } from "styled-components";
import {
  addDecorator,
  getStorybookUI,
  configure
} from "@storybook/react-native";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import "./addons";

// Setup root ThemeProvider
addDecorator(storyFn => (
  <ThemeProvider theme={{ darkMode: boolean("toggle darkMode", true) }}>
    {storyFn()}
  </ThemeProvider>
));

// import stories
configure(() => {
  require("./storybook-registry");
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
