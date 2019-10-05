import { storiesOf } from "@storybook/react-native";
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, number, withKnobs } from "@storybook/addon-knobs";

import Navbar from "./Navbar";
import navbarProps from "./Navbar.props";

storiesOf("Navbar", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Navbar
      {...navbarProps}
      toggleDarkMode={action("toggled Dark Mode")}
      title={text("Title", navbarProps.titleText)}
      user={{ score: number("score", navbarProps.score) }}
    />
  ));
