Sample application, demonstrating how to use the excellent [react-native-schemes-manager](https://github.com/Thinkmill/react-native-schemes-manager) library.

This project shows how to set that up in a basic project create with react-native init.  Note that if you are using the new
Expo based react-native projects this will not work for you until you (inevitably) have to eject from Expo.

Once you have your project using react-native-schemes-manager, you can create a build scheme in Xcode for each of your app's
environments, and crucially you can set different values for environment variables that the app needs (for instance, your 
server URL).

This example app uses a native class to read the contents of your app's Info.plist file, where you can store a value for the
BuildEnvironment variable from your build configuration.  This in turn can be used to look up the correct settings from a 
config.json file that lives with your project.  The nice thing about this approach is that it will also work in a similar
setup on Android, while keeping a single consistent file for configuration settings.

Note that the config.example.json file is intended to provide a guide for the shape of the json that you can use to define
your environment settings.  The actual file with settings for your actual environment should *never* be checked into source
code control.
