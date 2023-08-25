#import "AppDelegate.h"

#import <Firebase.h>

#import "RNBootSplash.h"

#import <CodePush/CodePush.h>

#import <React/RCTLinkingManager.h>

#import <React/RCTBundleURLProvider.h>

#import <SafariServices/SafariServices.h>

#import <FBSDKCoreKit/FBSDKCoreKit-swift.h>

#import <AuthenticationServices/AuthenticationServices.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"chiti_by_antstuido";
  self.initialProps = @{};
  [FIRApp configure];
  [[FBSDKApplicationDelegate sharedInstance] application:application
                    didFinishLaunchingWithOptions:launchOptions];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  UIView *rootView = [super createRootViewWithBridge:bridge
                                          moduleName:moduleName
                                           initProps:initProps];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; 
  return rootView;
}

- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [[FBSDKApplicationDelegate sharedInstance]application:app
                                                      openURL:url
                                                      options:options];
}

- (void)application:(UIApplication *)application
    didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [FIRMessaging messaging].APNSToken = deviceToken;
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
#endif
}

@end
