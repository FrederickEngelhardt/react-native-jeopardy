import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import CategoryColumn from "../CategoryColumn";
import categoryColumnProps from "../CategoryColumn.props";

const theme = {
  darkMode: true,
  deviceHeight: 800,
  deviceWidth: 320
};

const mockUpdateUserScore = jest.fn()

describe("<CategoryColumn />", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        // @ts-ignore
        <CategoryColumn {...categoryColumnProps} updateScore={mockUpdateUserScore} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
