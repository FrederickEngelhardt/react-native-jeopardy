import React from "react";
import { PanResponder, PanResponderInstance } from "react-native";
import styled from "styled-components/native";

import StorybookEntry from "./entry";
import RootScreen from "../screens/RootScreen";
import { generateThemeStore } from "../store/themeStore";
import { generateUserStore } from "../store/userStore";

interface State {
  isStorybook: boolean;
}

const ResponderView = styled.View`
  flex: 1;
`;

const showStorybookFirst = false;

class StorybookToggleComponent extends React.Component<{}, State> {
  _panResponder: PanResponderInstance;
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) =>
        gestureState.numberActiveTouches >= 3 && !this.timer,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.numberActiveTouches < 3 || this.timer) {
          return;
        }
        this.handleStorybookToggle();
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true
    });
    if (!showStorybookFirst) {
      this.generateStores();
    }
  }

  state = {
    isStorybook: showStorybookFirst
  };

  timer = null;

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (!this.timer && prevState.isStorybook !== this.state.isStorybook) {
      this.timer = setTimeout(() => {
        clearInterval(this.timer);
        this.timer = null;
      }, 1000);
    }
  }

  generateStores = () => {
    // Due to swapping storybook we need to regenerate the relay user and theme stores
    generateThemeStore();
    generateUserStore();
  };

  handleStorybookToggle = () => {
    const { isStorybook } = this.state;
    this.setState(
      state => ({ isStorybook: !state.isStorybook }),
      () => {
        if (isStorybook) {
          this.generateStores();
        }
      }
    );
  };

  render() {
    const { isStorybook } = this.state;
    return (
      <ResponderView {...this._panResponder.panHandlers}>
        {isStorybook ? <StorybookEntry /> : <RootScreen />}
      </ResponderView>
    );
  }
}

export default StorybookToggleComponent;
