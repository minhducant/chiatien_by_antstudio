/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {LogoChiti} from '@assets/svg/index';
import {setAppStatus} from '@stores/action';

export default function SpanishScreen() {
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state: any) => state.Authentication.accessToken,
  );
  const isFirstUse = useSelector((state: any) => state.Config.isFirstUse);

  useEffect(() => {
    accessToken
      ? dispatch(setAppStatus(3))
      : isFirstUse
      ? dispatch(setAppStatus(1))
      : dispatch(setAppStatus(2));
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <LogoChiti />
    </View>
  );
}
