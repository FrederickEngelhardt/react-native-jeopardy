import { commitLocalUpdate, graphql } from "react-relay";
import environment from "../environment";
import { GraphQLScalarType } from "graphql/type";

export const THEME_ID = "theme";
export const DARK_MODE = "darkMode";

export function update(name) {
  commitLocalUpdate(environment, store => {
    store.getRoot()
    // const user = store.get(THEME_ID);
    // // console.log('THIS IS USER', user)
    // user.setValue(name, "name");
    //
    // console.log(store.get(THEME_ID));
  });
}

export function toggleDarkMode(toggleValue) {
  commitLocalUpdate(environment, store => {
    const theme = store.getRoot().getLinkedRecord(THEME_ID)
    theme.setValue(toggleValue, DARK_MODE)
  })
}

export function generateThemeStore() {
  commitLocalUpdate(environment, store => {
    const dataRecord = store.create(THEME_ID, "Theme");
    dataRecord.setValue(true, DARK_MODE)
    store.getRoot().setLinkedRecord(dataRecord, THEME_ID)
  });
}
