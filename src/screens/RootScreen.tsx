import React from "react";

import RootThemeProvider from "../components/RootThemeProvider";
import HomeScreen from "./HomeScreen";

const RootScreen = () => {
  return (
    <RootThemeProvider>
      <HomeScreen />
    </RootThemeProvider>
  );
};

export default RootScreen;
