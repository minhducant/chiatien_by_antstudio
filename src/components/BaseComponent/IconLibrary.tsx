import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconLibraryProps {
  size?: number;
  style?: any;
  color?: string;
  name: string;
  activeOpacity?: number;
  onPress?: (event: Event) => void;
  library?: keyof typeof iconLibraries;
}

const iconLibraries = {
  Entypo: Entypo,
  Feather: Feather,
  Ionicons: Ionicons,
  Fontisto: Fontisto,
  EvilIcons: EvilIcons,
  AntDesign: AntDesign,
  FontAwesome: FontAwesome,
  FontAwesome5: FontAwesome5,
  FontAwesome6: FontAwesome6,
  MaterialIcons: MaterialIcons,
  MaterialCommunityIcons: MaterialCommunityIcons,
};

export const IconLibrary: React.FC<IconLibraryProps> = ({
  style,
  onPress,
  name,
  size = 25,
  color = 'black',
  activeOpacity = 1,
  library = 'Ionicons',
}) => {
  const IconComponent = iconLibraries[library];
  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={style as any}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={typeof onPress === 'function' ? false : true}
    />
  );
};
