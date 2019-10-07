import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import Card from "../Card";
import cardProps from "../Card.props";

const theme = {
  darkMode: true
};

describe("test", () => {
  it("renders correctly", () => {
    const { container } = render(<Card {...cardProps} theme={theme} />);
    expect(container).toMatchSnapshot()
    // expect(container).toMatchSnapshot()
    // expect(getByText("500")).toMatchSnapshot();
  });
});
