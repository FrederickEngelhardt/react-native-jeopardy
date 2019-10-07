import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  withKnobs
} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import CategoryHeadlineCard from "./CategoryHeadlineCard";
import categoryHeadlineProps from "./CategoryHeadlineCard.props";


storiesOf("<CategoryHeadlineCard />", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    // @ts-ignore
    <CategoryHeadlineCard
      {...categoryHeadlineProps}
      updateUserScore={action('updated user score')}
    />
  ));
