//
//  RNConfig.m
//  xcodeenvvariablesexample
//
//  Created by Igor Krtolica on 7/7/17.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  // Read the BuildEnvironment key from the project's plist file
  NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];
  // Return a dictionary with just that key value (you can add more here if you want)
  return @{ @"buildEnvironment": buildEnvironment };
}

@end
