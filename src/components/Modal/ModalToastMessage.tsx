import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import Animated, {
  runOnJS,
  withDelay,
  withTiming,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import normalize from 'react-native-normalize';

import {
  HelpToastBackground,
  FailToastBackground,
  WarningToastBackground,
  SuccessToastBackground,
} from '@assets/svg/index';
import color from '@styles/color';
import themeStyle from '@styles/theme.style';
import {IconLibrary} from '@components/BaseComponent/IconLibrary';

const TOAST_DURATION = 2000;

const ToastMessage = () => {
  const toastBottomAnimation = useSharedValue(-100);
  const BOTTOM_VALUE = Platform.OS === 'ios' ? normalize(60) : normalize(20);
  const [showing, setShowing] = useState(false);
  const [toastOptions, setToastOptions] = useState<any>({});

  const showToastMessage = useCallback(
    (options: any) => {
      setToastOptions(options);
      setShowing(true);
      toastBottomAnimation.value = withSequence(
        withTiming(BOTTOM_VALUE),
        withDelay(
          TOAST_DURATION,
          withTiming(-100, undefined, finished => {
            if (finished) {
              runOnJS(setShowing)(false);
            }
          }),
        ),
      );
    },
    [BOTTOM_VALUE, toastBottomAnimation],
  );

  useEffect(() => {
    const toastListener = DeviceEventEmitter.addListener(
      'SHOW_TOAST_MESSAGE',
      showToastMessage,
    );
    return () => {
      toastListener.remove();
    };
  }, [showToastMessage]);

  const animatedTopStyles = useAnimatedStyle(() => {
    return {
      bottom: toastBottomAnimation.value,
    };
  });

  const hideToast = useCallback(() => {
    toastBottomAnimation.value = withTiming(-100, undefined, finished => {
      if (finished) {
        runOnJS(setShowing)(false);
      }
    });
  }, [toastBottomAnimation]);

  if (!showing) {
    return null;
  }

  return (
    <Animated.View style={[styles.toastContainer, animatedTopStyles]}>
      {toastOptions.type === 'success' ? (
        <SuccessToastBackground />
      ) : toastOptions.type === 'fail' ? (
        <FailToastBackground />
      ) : toastOptions.type === 'warning' ? (
        <WarningToastBackground />
      ) : (
        <HelpToastBackground />
      )}
      <View style={styles.toastMessageContainer}>
        <Text style={styles.toastTitle}>
          {toastOptions.type === 'success'
            ? 'Well done!'
            : toastOptions.type === 'fail'
            ? 'Oh snap!'
            : toastOptions.type === 'warning'
            ? 'Warning!'
            : 'Hi there!'}
        </Text>
        <Text style={styles.toastMessage} numberOfLines={2}>
          {toastOptions.message}
        </Text>
      </View>
      <TouchableOpacity style={styles.closeIcon} onPress={hideToast}>
        <IconLibrary
          library="AntDesign"
          name="close"
          size={27}
          color={color.WHITE}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ToastMessage;

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  toastBackground: {
    position: 'absolute',
  },
  toastMessageContainer: {
    position: 'absolute',
    top: 25,
    width: normalize(250),
    height: normalize(100),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(40),
  },
  toastMessage: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 14,
    color: color.WHITE,
    paddingLeft: normalize(5),
  },
  toastTitle: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 20,
    color: color.WHITE,
  },
  closeIcon: {
    position: 'absolute',
    top: normalize(40),
    right: normalize(20),
    zIndex: 3,
  },
});
