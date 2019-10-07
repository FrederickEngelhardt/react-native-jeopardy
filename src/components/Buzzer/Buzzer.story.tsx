import { storiesOf } from "@storybook/react-native";
import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import Buzzer from "./Buzzer";
import buzzerProps from "./Buzzer.props";

storiesOf("<Buzzer />", module)
  .addDecorator(withKnobs)
  .add("default", () => <Buzzer {...buzzerProps} handleClick={action('clicked buzzer')} />);
