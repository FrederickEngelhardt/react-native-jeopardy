import categoryColumnProps from "../CategoryColumn/CategoryColumn.props";

const column2 = {
  ...categoryColumnProps,
  headlineCard: { title: "Planets" },
  updateUserScore: () => {}
}

const boardModuleProps = {
  categoryColumns: [{...categoryColumnProps, updateUserScore: () => {}}, column2]
};

export default boardModuleProps;
