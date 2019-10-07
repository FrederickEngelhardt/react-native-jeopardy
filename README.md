# React Native SWAPI Jeopardy App


## Getting Started
- requires node 10.16.0
- Install expo-cli `yarn global add expo-cli`
- You will need the expo app downloaded on your phone or have an Android Emulator or iOS Simulator booted up
- If you are updating the GraphQL schema or adding new queries you will need to run `yarn relay:watch` which will allow relay to update and auto generate the changed schema.

## Project Technologies

### Storybook: 
Inside of the root [App.tsx](./App.tsx) you can enable storybook by setting the const to `storybook = true`

[StorybookToggleComponent](./src/storybook/StorybookToggleComponent.tsx)
- This component intercepts user touches.
- Allows for swapping between Storybook and the Main app by clicking the screen with **3 or more fingers/touches**

Why Storybook:
- Storybook is a great way to rapidly prototype UI components.
- Storybook is enabled by default and will 
- See the [storybook-docs](https://storybook.js.org/docs/basics/introduction/) for more information

## React Relay
- GraphQL powered querying library that powers all our GraphQL queries and as well as allowing shared localState

### Local Store
[clientSchema.graphql](src/clientSchema.graphql) file contains the data structure.

**Important note**:  
You will always need to provide a top level query key that lives on the server level for the schema to update. Example when querying the local userStore ```__typename``` is provided.


## Testing

### Snapshot testing
All ui-components have snapshot testing using `jest` and `@testing-library/react-native`

UI-components will not container graphql or api requests.

run `yarn test` and/or add the `--watch` flag to monitor your tests.
