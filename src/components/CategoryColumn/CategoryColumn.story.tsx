import { storiesOf } from "@storybook/react-native";
import * as React from "react";
import { ThemeProvider } from "styled-components";


import CategoryColumn from "./CategoryColumn";
import categoryColumnProps from "./CategoryColumn.props";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";

storiesOf("CategoryColumn", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CategoryColumn
      {...categoryColumnProps}
    />
  ));
