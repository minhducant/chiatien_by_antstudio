import React, {useState, useLayoutEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  InteractionManager,
  DeviceEventEmitter,
} from 'react-native';
import Animated, {
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
} from '../../assets/svg';
import color from '../../styles/color';
import themeStyle from '../../styles/theme.style';

const TOAST_DURATION = 2000;

const ToastMessage = () => {
  const showingRef = useRef<any>(false);
  const toastBottomAnimation = useSharedValue(-100);
  const [toastOptions, setToastOptions] = useState<any>({});
  const BOTTOM_VALUE = Platform.OS === 'ios' ? normalize(60) : normalize(20);

  const showToastMessage = useCallback(
    (options: any) => {
      setToastOptions(options);
      showingRef.current = true;
      toastBottomAnimation.value = withSequence(
        withTiming(BOTTOM_VALUE),
        withDelay(
          TOAST_DURATION,
          withTiming(normalize(-150), undefined, finished => {
            if (finished) {
              showingRef.current = false;
            }
          }),
        ),
      );
    },
    [BOTTOM_VALUE, toastBottomAnimation],
  );

  useLayoutEffect(() => {
    const toastListener = DeviceEventEmitter.addListener(
      'SHOW_TOAST_MESSAGE',
      showToastMessage,
    );
    return () => {
      toastListener.remove();
    };
  });

  useLayoutEffect(() => {
    const toastListener = DeviceEventEmitter.addListener(
      'HIDE_TOAST_MESSAGE',
      hideToast,
    );
    return () => {
      toastListener.remove();
    };
  });

  const animatedTopStyles = useAnimatedStyle(() => {
    return {
      bottom: toastBottomAnimation.value,
    };
  });

  const hideToast = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      toastBottomAnimation.value = withTiming(
        normalize(-150),
        undefined,
        finished => {
          if (finished) {
            showingRef.current = false;
          }
        },
      );
    });
  }, [toastBottomAnimation]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dy > 0) {
        hideToast();
      }
    },
    onPanResponderRelease: () => {},
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.toastContainer, animatedTopStyles]}>
      {showingRef.current && (
        <>
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
          <TouchableOpacity
            onPress={hideToast}
            activeOpacity={0.7}
            style={styles.closeIcon}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </>
      )}
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
    top: normalize(30),
    width: normalize(270),
    height: normalize(100),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(40),
    left: normalize(45),
  },
  toastMessage: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 14,
    color: color.WHITE,
    paddingTop: normalize(5),
  },
  toastTitle: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 18,
    color: color.WHITE,
  },
  closeIcon: {
    position: 'absolute',
    top: normalize(33),
    right: normalize(10),
    zIndex: 3,
    width: normalize(50),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontFamily: themeStyle.FONT_LOGO,
    fontSize: 38,
    color: color.WHITE,
  },
});
