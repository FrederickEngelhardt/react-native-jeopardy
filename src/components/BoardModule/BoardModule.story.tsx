import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import BoardModule from "./BoardModule";
import boardModuleProps from "./BoardModule.props";
import { withKnobs } from "@storybook/addon-knobs";

storiesOf("BoardModule", module)
  .addDecorator(withKnobs)
  .add("default", () => <BoardModule {...boardModuleProps} />);
