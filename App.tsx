import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';
import {I18nextProvider} from 'react-i18next';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as ProviderPaper} from 'react-native-paper';

import i18n from './src/i18n/index';
import {store, persistor} from './src/stores/index';
import {AppNavigation} from './src/navigation/AppNavigation';
// import ModalToastMessage from './src/components/Modal/ModalToastMessage';
// import ModalLoadingLottie from './src/components/Modal/ModalLoadingLottie';

const codePushOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

const App = () => {
  return (
    <ProviderPaper>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <AppNavigation />
            {/* <ModalToastMessage />
            <ModalLoadingLottie /> */}
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </ProviderPaper>
  );
};

export default CodePush(codePushOptions)(App);
