# Run project

1. First install deps `yarn or npm install`
2. iOS only: `cd ios && pod install`
3. Run project `yarn android/ios` or `npx react-native run:android/ios`

## Android react-native-maps issue

If you have any issue installing react-native-maps check the compileSdkVersion in your `android/build.gradle`, then go to `node-modules/react-native-maps/lib/android/build.gradle` and change (compileSdkVersion) to match yours.
