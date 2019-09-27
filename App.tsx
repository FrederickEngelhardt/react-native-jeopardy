import React from "react";
import { generateThemeStore } from "./src/store/themeStore";

import RootScreen from "./src/screens/RootScreen";

// Seeds localState
generateThemeStore()

const App = () => <RootScreen />

export default App
