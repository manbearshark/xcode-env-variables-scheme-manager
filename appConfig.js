//
// appConfig.js
//
// Native module implementation, reads a dictionary value from the
// iOS native plist file in the XCode project, and returns the environment
// configuration we are being run in.
//
// Note that you should replace the config.example.json with your own file -
// the example files are just an example.  These should never be added to source
// control.
//

import { RNConfig } from 'NativeModules';
import lowerCase from 'lodash/lowerCase';
import EnvConfig from './config.example.json';

const NATIVE_ENV = lowerCase(RNConfig.buildEnvironment);

function getAppServerRootURL() {
  return NATIVE_ENV === undefined ? undefined : EnvConfig[NATIVE_ENV].appRootURL;
}

export default {
  environment: NATIVE_ENV,
  appServerRootURL: getAppServerRootURL(),
};
