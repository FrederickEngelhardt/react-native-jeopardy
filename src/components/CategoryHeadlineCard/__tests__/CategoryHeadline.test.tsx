import React from "react";
import { render } from "@testing-library/react-native";

import CategoryHeadlineCard from "../CategoryHeadlineCard";
import categoryHeadlineProps from "../CategoryHeadlineCard.props";

describe("<CategoryHeadline/>", () => {
  it("renders correctly", () => {
    const { container } = render(
        <CategoryHeadlineCard {...categoryHeadlineProps} />
    );
    expect(container).toMatchSnapshot();
  });
});
