import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/color';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Post } from '@/types';

interface Props {
  post: Post;
}

export const FeedItem = ({ post }: Props) => {
  const isLiked = false;

  return (
    <View style={Styles.container}>
      <View style={Styles.contentContainer}>
        <Text style={Styles.title}>게시글 제목</Text>
        <Text style={Styles.description}>게시글 내용</Text>
      </View>
      <View style={Styles.menuContainer}>
        <Pressable style={Styles.menu}>
          <Octicons
            name={isLiked ? 'heart-fill' : 'heart'}
            size={16}
            color={isLiked ? colors.ORANGE['600'] : colors.BLACK}
          />
          <Text style={isLiked ? Styles.activeMenuText : Styles.menuText}>1</Text>
        </Pressable>

        <Pressable style={Styles.menu}>
          <MaterialCommunityIcons name={'comment-processing-outline'} size={16} color={colors.BLACK} />
          <Text style={Styles.menuText}>1</Text>
        </Pressable>

        <Pressable style={Styles.menu}>
          <Ionicons name={'eye-outline'} size={16} color={colors.BLACK} />
          <Text style={Styles.menuText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },

  contentContainer: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: '600',
    marginVertical: 8,
  },

  description: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: 14,
  },

  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: colors.GRAY['300'],
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    width: '33%',
    gap: 4,
  },

  menuText: {
    fontSize: 14,
    color: colors.GRAY['700'],
  },

  activeMenuText: {
    fontWeight: '500',
    color: colors.ORANGE['600'],
  },
});
