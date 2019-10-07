import { generateThemeStore } from "./src/store/themeStore";
import { generateUserStore } from "./src/store/userStore";

import RootScreen from "./src/screens/RootScreen";
import StorybookToggleComponent from "./src/storybook/StorybookToggleComponent";

const storybook = true;

if (!storybook) {
  // Seeds localState
  generateThemeStore();
  generateUserStore();
}

export default storybook ? StorybookToggleComponent : RootScreen;
