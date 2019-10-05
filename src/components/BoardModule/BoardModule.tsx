import React from "react";
import styled, { withTheme } from "styled-components";
import CategoryColumn, { Props as CategoryColumnProps } from "../CategoryColumn/CategoryColumn";
import {Theme} from "../RootThemeProvider";

const CategoryScrollView = styled.ScrollView`
`

interface Props {
  categoryColumns: [CategoryColumnProps];
  theme: Theme;
}

interface State {
  activeCardId: number | null;
}

class BoardModule extends React.PureComponent<Props, State> {
  state = {
    activeCardId: null
  }
  render() {
    const { categoryColumns, theme } = this.props;

    const generateSnapOffsets = categoryColumns.map((ele, index: number) => (index * theme.deviceWidth))
    return (
      <CategoryScrollView
        horizontal
        snapToOffsets={generateSnapOffsets}
      >
        {categoryColumns.map((column) => (
          <CategoryColumn key={column.headlineCard.title} {...column} />
        ))}
      </CategoryScrollView>
    );
  }
}

export default withTheme(BoardModule);
