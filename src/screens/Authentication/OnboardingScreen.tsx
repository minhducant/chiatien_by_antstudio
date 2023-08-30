import React, {useRef, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import normalize from 'react-native-normalize';
import {
  View,
  Text,
  Image,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {AppImage} from '@assets/images';
import {LogoChiti} from '@assets/svg/index';
import {setIsFirstUse, setAppStatus} from '@stores/action';
import {onboardingScreenStyle as styles} from '@styles/onboardingScreen.style';

const OnboardingScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const animation = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = useMemo(
    () => ({
      transform: [{scale: animation}],
    }),
    [animation],
  );

  const onGetStarted = () => {
    dispatch(setIsFirstUse(false));
    dispatch(setAppStatus(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewInformation}>
        <LogoChiti height={normalize(30)} />
        <Text style={styles.txtIntro}>
          {t('manage_your_team_everything_with')}{' '}
          <Text style={styles.txtChiti}>Chiti</Text>
        </Text>
        <Image
          resizeMode="cover"
          style={styles.onboardingVector}
          source={AppImage('onboarding_vector')}
        />
        <Text style={styles.txtSupIntro}>
          Khi bạn bị choáng ngợp bởi khối lượng công việc phải làm, hãy dừng lại
          và suy nghĩ lại!
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPressIn={onPressIn}
        onPress={onGetStarted}
        onPressOut={onPressOut}>
        <Animated.View style={[styles.viewAction, animatedStyle]}>
          <Text style={[styles.txtAction]}>{t('get_started')}</Text>
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default React.memo(OnboardingScreen);
