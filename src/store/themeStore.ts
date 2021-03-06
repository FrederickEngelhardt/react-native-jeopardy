import { commitLocalUpdate } from "react-relay";
import environment from "../environment";

export const THEME_ID = "theme";
export const DARK_MODE = "darkMode";

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
