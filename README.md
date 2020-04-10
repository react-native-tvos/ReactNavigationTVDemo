# ReactNavigationTVDemo

Demonstrates React Navigation running on Apple TV.

## Features

- Shows how to solve an issue where off-screen controls can still be reached by the tvOS focus engine.  See the discussion [here](https://github.com/react-native-community/react-native-tvos/issues/43) in the `react-native-tvos` repo.
- Shows use of tvOS specific props and events in controls for the screen and for navigation
- Shows proper enabling and disabling of the menu button using `TVMenuControl`
- Uses [react-native-tvos](https://github.com/react-native-community/react-native-tvos), the react-native distro with full Apple TV support
- Uses a fork of `react-native-screens` where tvOS compilation errors are fixed

[Video](https://dlowder-salesforce.github.io/react-native-apple-tv/ReactNavigationTVDemo.mp4)

## Instructions

- Clone this repo
- Change to the repo directory
- `yarn`
- `yarn run bundle_ios` or `yarn run bundle_ios_dev`
- `cd ios; pod install; cd ..`
- `open ios/ReactNavigationTVDemo.xcworkspace`
- Build the tvOS target

