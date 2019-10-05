import { generateThemeStore } from "./src/store/themeStore";

import RootScreen from "./src/screens/RootScreen";
import storybookEntry from './src/storybook/entry'
import {generateUserStore} from "./src/store/userStore";

const storybook = false

if (!storybook){
  // Seeds localState
  generateThemeStore()
  generateUserStore()
}

export default storybook ? storybookEntry : RootScreen
