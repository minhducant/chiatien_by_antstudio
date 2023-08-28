import React, {useContext} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import color from '@styles/color';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import themeStyle from '@styles/theme.style';
// import { getFirstAlphabetOfName } from '@utils/';
import {LocalizationContext} from '@context/index';

const CustomDrawer = props => {
  const {t} = useContext(LocalizationContext);
  const navigation = useNavigation();
  const userName = useSelector(state => state.auth.user.employee_id.name);
  const email = useSelector(state => state.auth.user.user_id.login);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={stylesSidebar.container}>
        <TouchableOpacity
          style={stylesSidebar.drawerItemHeader}
          activeOpacity={0.5}>
          <View style={stylesSidebar.viewFlex(2.5)}>
            <Image
              source={require('@assets/images/user-profile.jpg')}
              style={{
                height: normalize(50),
                width: normalize(50),
                borderRadius: normalize(25),
              }}
            />
          </View>
          <View style={stylesSidebar.viewFlex(7.5)}>
            <Text style={stylesSidebar.txt(true)} numberOfLines={1}>
              {userName}
            </Text>
            <Text style={stylesSidebar.txt(false)} numberOfLines={1}>
              {email}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={stylesSidebar.DrawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={stylesSidebar.viewFooter}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            paddingVertical: normalize(10),
            marginLeft: normalize(5),
          }}>
          <View style={stylesSidebar.itemFooter}>
            <Ionicons name="share-social-outline" size={23} />
            <Text style={stylesSidebar.textFooter}>{t('share')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              t('logout'),
              t('are_you_sure'),
              [
                {
                  text: t('cancel'),
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: t('confirm'),
                  onPress: () => {
                    AsyncStorage.clear();
                    navigation.navigate('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
          style={{
            paddingVertical: normalize(10),
            marginLeft: normalize(5),
          }}>
          <View style={stylesSidebar.itemFooter}>
            <Ionicons name="exit-outline" size={23} />
            <Text style={stylesSidebar.textFooter}>{t('logout')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: '#ffffff',
  },
  DrawerItemList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: normalize(10),
  },
  viewFooter: {
    paddingLeft: normalize(20),
    paddingVertical: normalize(10),
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  textFooter: {
    fontSize: 15,
    fontFamily: themeStyle.FONT_FAMILY,
    marginLeft: normalize(10),
    color: color.BLACK,
  },
  itemFooter: {flexDirection: 'row', alignItems: 'center'},
  viewFlex: flex => ({
    flex: flex,
    justifyContent: 'center',
    alignItems: flex === 2.5 ? 'center' : 'flex-start',
  }),
  drawerItemHeader: {
    flexDirection: 'row',
    borderRadius: normalize(7),
    paddingVertical: normalize(10),
    marginHorizontal: normalize(10),
    backgroundColor: '#ddf2dc',
  },
  txt: bold => ({
    fontSize: 16,
    fontFamily: bold === true ? themeStyle.FONT_BOLD : themeStyle.FONT_FAMILY,
    color: color.BLACK,
  }),
});
