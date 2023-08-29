import React from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import normalize from 'react-native-normalize';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {LogoChiti} from '@assets/svg/index';
import {setIsFirstUse, setAppStatus} from '@stores/action';
import {onboardingScreenStyle as styles} from '@styles/onboardingScreen.style';

function OnboardingScreen() {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewInformation}>
        <LogoChiti height={normalize(30)} />
      </View>
      <View>
        <TouchableOpacity>
          <Text>{t('get_started')}!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
