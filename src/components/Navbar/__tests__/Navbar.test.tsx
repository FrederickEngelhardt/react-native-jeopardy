import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import Navbar from "../Navbar";
import navbarProps from "../Navbar.props";

const theme = {
  darkMode: true,
  deviceHeight: 800,
  deviceWidth: 320
};

describe("<Navbar />", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Navbar {...navbarProps} theme={theme}/>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
