import { generateThemeStore } from "./src/store/themeStore";

import RootScreen from "./src/screens/RootScreen";
import storybookEntry from './src/storybook/entry'

const storybook = true

if (!storybook){
  // Seeds localState
  generateThemeStore()
}

export default storybook ? storybookEntry : RootScreen
