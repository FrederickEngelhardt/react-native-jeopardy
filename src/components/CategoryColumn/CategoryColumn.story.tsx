import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  withKnobs
} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import CategoryColumn from "./CategoryColumn";
import categoryColumnProps from "./CategoryColumn.props";


storiesOf("CategoryColumn", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    // @ts-ignore
    <CategoryColumn
      {...categoryColumnProps}
      updateUserScore={action('updated user score')}
    />
  ));
