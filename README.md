# ReactNavigationTVDemo

Demonstrates React Navigation running on Apple TV and Android TV

## Features

- Shows how to solve an issue where off-screen controls can still be reached by the tvOS focus engine.  See the discussion [here](https://github.com/react-native-community/react-native-tvos/issues/43) in the `react-native-tvos` repo.
- Shows use of tvOS specific props and events in controls for the screen and for navigation
- Shows proper enabling and disabling of the menu button using `TVMenuControl`
- Uses [react-native-tvos](https://github.com/react-native-community/react-native-tvos), the react-native distro with full Apple TV support
- Includes patches to fix tvOS compile issues with `react-native-reanimated` and `react-native-screens`

[Video](https://dlowder-salesforce.github.io/react-native-apple-tv/ReactNavigationTVDemo.mp4)

## Instructions

```bash
# Installation
git clone https://github.com/react-native-tvos/ReactNavigationTVDemo
cd ReactNavigationTVDemo
yarn
cd ios
pod install
cd ..
# iOS
react-native run-ios
# Apple TV
react-native run-ios --scheme="ReactNavigationTVDemo-tvOS" --simulator="Apple TV"
# Android (either phone or TV simulator or device already running and connected)
react-native run-android
```


