import { storiesOf } from "@storybook/react-native";
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, number, withKnobs } from "@storybook/addon-knobs";

import Navbar from "./Navbar";
import navbarProps from "./Navbar.props";

storiesOf("<Navbar />", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Navbar
      toggleDarkMode={action("toggled Dark Mode")}
      titleText={text("Title", navbarProps.titleText)}
      user={{ score: number("score", navbarProps.user.score) }}
    />
  ));
