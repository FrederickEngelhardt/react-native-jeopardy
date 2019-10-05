import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import CategoryColumn from "./CategoryColumn";
import categoryColumnProps from "./CategoryColumn.props";
import {
  withKnobs
} from "@storybook/addon-knobs";


storiesOf("CategoryColumn", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CategoryColumn
      {...categoryColumnProps}
    />
  ));
