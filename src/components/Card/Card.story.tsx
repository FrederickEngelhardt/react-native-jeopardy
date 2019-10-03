import { storiesOf } from "@storybook/react-native";
import * as React from "react";
import { ThemeProvider } from "styled-components";


import Card from "./Card";
import cardProps from "./Card.props";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Card
      {...cardProps}
      title={text("Title Text", cardProps.title)}
      isOpened={boolean("Toggle Card Opened", cardProps.isOpened)}
      points={number("Card Points", cardProps.points)}
      handleToggle={() => {}}
    />
  ));
