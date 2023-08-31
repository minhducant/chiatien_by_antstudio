import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  // View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import NoFooter from '@navigation/NoFooter';
import BottomTabs from '@navigation/BottomTabs';
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
      name: t('about_chiti'),
      icon: 'chiti',
      onPress: () => {
        navigation.navigate('NoFooter', {
          screen: 'AboutChitiScreen',
        });
        closeDrawer();
      },
    },
  ];

  const renderItemDrawer = ({item, index}: any) => {
    return (
      <TouchableOpacity key={index} onPress={item.onPress}>
        <Text style={styles.txtItemDrawer}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={LIST_DRAWER}
        renderItem={renderItemDrawer}
        contentContainerStyle={styles.drawerFlatList}
        keyExtractor={(i: any, j: {toString: () => any}) => j.toString()}
      />
    </SafeAreaView>
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
