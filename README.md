# Manage Env Settings in Xcode

Basic react-native application setup, demonstrating how to use the excellent [react-native-schemes-manager](https://github.com/Thinkmill/react-native-schemes-manager) library plus a native module to read environment settings from the Info.plist file that comes with every iOS app.

This project shows how to set that up in a basic project create with react-native init.  Note that if you are using the new Expo based react-native projects this will not work for you until you (inevitably) have to eject from Expo.

Once you have your project using react-native-schemes-manager, you can create a build scheme in Xcode for each of your app's environments, and crucially you can set different values for environment variables that the app needs (for instance, your server URL).

This example app uses a native class to read the contents of your app's Info.plist file, where you can store a value for the BuildEnvironment variable from your build configuration.  This in turn can be used to look up the correct settings from a config.json file that lives with your project.  The nice thing about this approach is that it will also work in a similar setup on Android, while keeping a single consistent file for configuration settings.

Note that the config.example.json file is intended to provide a guide for the shape of the json that you can use to define your environment settings.  The actual file with settings for your actual environment should *never* be checked into source code control.

# Steps to Create this Project

1. `react-native init`

2. `yarn add --dev react-native-schemes-manager`

3. Create a `config.example.json` file in your project src (it is in the root dir in this project).  This will contain a configuration object with entries for each of your build configuration names in Xcode.  For example, `staging`, `production`, etc.

4. Create the build configurations you will want in your Xcode project.  This example adds a `Staging` and `Beta` build configuration as examples.

5. Add a xcodeSchemes section to your package.json file.  This is needed to tell the react-native-schemes-manager which configuration to copy to the new configurations you just created in step 4.

6. Add a postinstall task to the package.json that invokes `react-native-schemes-manager all`.  This will perform the update to your xcode projects every time you install with npm or yarn.  This will need to run each time you change your configuration.

7. The example project contains a react-native native module (see `RNConfig.m` and `appConfig.js`) that looks for the `BuildEnvironment` user-defined setting in Info.plist.  This setting is in turn set based the value of `BUILD_ENV` user-defined setting in your xcode project.  `BUILD_ENV` should contain one of the `staging`, `Beta`, etc. values from the build configurations you defined in step 4.  Once your project is built and packaged, the code in `appConfig.js` will look up the BuildEnvironment value from `Info.plist` and then look up the appropriate values from `config.example.json`.

If you want to explore some alternative solutions to this problem check out these links:

[Multunus](http://www.multunus.com/blog/2016/06/automated-environment-management-react-native-ios/)

[Facebook Issues List](https://github.com/facebook/react-native/issues/11813#issuecomment-273279257)

[Zeemee](https://zeemee.engineering/how-to-set-up-multiple-schemes-configurations-in-xcode-for-your-react-native-ios-app-7da4b5237966)
