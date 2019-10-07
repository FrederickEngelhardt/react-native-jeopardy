import React from "react";
import { render } from "@testing-library/react-native";

import Buzzer from "../Buzzer";
import buzzerProps from "../Buzzer.props";

const theme = {
  darkMode: true,
  deviceHeight: 100,
  deviceWidth: 100
};

const handleClick = jest.fn();

describe("<Buzzer />", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Buzzer {...buzzerProps} theme={theme} handleClick={() => handleClick} />
    );
    expect(container).toMatchSnapshot();
  });
});
