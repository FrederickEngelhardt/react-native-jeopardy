import { generateThemeStore } from "./src/store/themeStore";
import { generateUserStore } from "./src/store/userStore";

import RootScreen from "./src/screens/RootScreen";
import storybookEntry from "./src/storybook/entry";

const storybook = false;

if (!storybook) {
  // Seeds localState
  generateThemeStore();
  generateUserStore();
}

export default storybook ? storybookEntry : RootScreen;
