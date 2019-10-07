import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import BoardModule from "../BoardModule";
import boardModuleProps from "../BoardModule.props";

const theme = {
  darkMode: true,
  deviceHeight: 800,
  deviceWidth: 320,
};

describe("test", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme} >
      <BoardModule {...boardModuleProps}/>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
