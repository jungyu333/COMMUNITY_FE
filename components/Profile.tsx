import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '@/constants/color';

interface Props {
  onPress: () => void;
  nickname: string;
  imageUri?: string;
  createdAt: string;
  option?: React.ReactNode;
}

export const Profile = ({ onPress, nickname, imageUri, createdAt, option }: Props) => {
  return (
    <View style={Styles.container}>
      <Pressable style={Styles.profileContainer} onPress={onPress}>
        <Image
          style={Styles.avatar}
          source={imageUri ? { uri: imageUri } : require('@/assets/images/default-avatar.png')}
        />

        <View style={{ gap: 4 }}>
          <Text style={Styles.nickname}>{nickname}</Text>
          <Text style={Styles.createdAt}>{createdAt}</Text>
        </View>
      </Pressable>
      {option}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY['300'],
  },

  nickname: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.BLACK,
  },

  createdAt: {
    fontSize: 14,
    color: colors.GRAY['500'],
  },
});
