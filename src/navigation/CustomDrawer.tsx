import React from 'react';
import {useTranslation} from 'react-i18next';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';

import color from '@styles/color';
import {LogoChiti} from '@assets/svg';
import {onLogout} from '@utils/index';
import NoFooter from '@navigation/NoFooter';
import BottomTabs from '@navigation/BottomTabs';
import {IconLibrary} from '@components/BaseComponent/IconLibrary';
import {closeDrawer, drawerRef} from '@navigation/RootNavigation';
import {navigationStyle as styles} from '@styles/navigation.style';
import {default as DrawerLayout} from '@components/BaseComponent/DrawerLib';

interface NavigationProps {
  navigate: (route: string, params: {screen: string; params?: any}) => void;
}

const Stack = createStackNavigator();

const DrawerContent = () => {
  const {t} = useTranslation();
  const navigation: NavigationProps = useNavigation();

  const LIST_DRAWER = [
    {
      name: t('change_language'),
      icon: 'language',
      onPress: () => {
        closeDrawer();
      },
    },
    {
      name: t('about_chiti'),
      icon: 'chiti',
      onPress: () => {
        navigation.navigate('NoFooter', {
          screen: 'AboutChitiScreen',
        });
        closeDrawer();
      },
    },
    {
      name: 'Liên hệ hỗ trợ',
      icon: 'help',
      onPress: () => {
        closeDrawer();
      },
    },
    {
      name: t('sign_out'),
      icon: 'sign_out',
      onPress: () => {
        closeDrawer();
        onLogout();
      },
    },
  ];

  const renderItemDrawer = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={item.onPress}
        style={styles.itemDrawer}>
        <View style={styles.iconDrawer}>
          {item.icon === 'language' && (
            <IconLibrary
              name="language"
              size={20}
              color={color.MAIN}
              library="FontAwesome"
            />
          )}
          {item.icon === 'help' && (
            <IconLibrary
              name="help-circle"
              size={25}
              color={color.MAIN}
              library="Feather"
            />
          )}
          {item.icon === 'chiti' && (
            <IconLibrary
              name="info"
              size={20}
              color={color.MAIN}
              library="Fontisto"
            />
          )}
          {item.icon === 'sign_out' && (
            <IconLibrary
              library="FontAwesome"
              name="sign-out"
              size={25}
              color={color.MAIN}
            />
          )}
        </View>
        <Text style={styles.txtItemDrawer}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.drawerContainer}>
      <LinearGradient
        colors={['#00B732', '#00B732']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <LogoChiti fill={color.WHITE} height={normalize(35)} />
      </LinearGradient>
      <FlatList
        data={LIST_DRAWER}
        scrollEnabled={false}
        renderItem={renderItemDrawer}
        contentContainerStyle={styles.drawerFlatList}
        keyExtractor={(i: any, j: {toString: () => any}) => j.toString()}
      />
    </View>
  );
};

const BottomTabsNavigator = () => (
  <Stack.Navigator
    initialRouteName="BottomTabs"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="NoFooter" component={NoFooter} />
  </Stack.Navigator>
);

const CustomDrawer = () => {
  return (
    <DrawerLayout
      ref={drawerRef}
      drawerBackgroundColor={'white'}
      renderDrawerContent={() => <DrawerContent />}
      drawerWidth={Dimensions.get('screen').width * 0.75}>
      <BottomTabsNavigator />
    </DrawerLayout>
  );
};

export default function App() {
  return <CustomDrawer />;
}
