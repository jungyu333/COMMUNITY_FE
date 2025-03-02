import { FlatList, StyleSheet } from 'react-native';
import { FeedItem } from '@/components/FeedItem';
import { colors } from '@/constants/color';

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: 'title',
    description:
      '더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.',
    createdAt: '2025-01-01',
    author: {
      id: 1,
      nickname: '준규',
      imageUri: '',
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 1,
    title: 'title',
    description:
      '더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.',
    createdAt: 'createdAt',
    author: {
      id: 1,
      nickname: 'nickname',
      imageUri: '',
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 3,
    userId: 1,
    title: 'title',
    description:
      '더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.',
    createdAt: 'createdAt',
    author: {
      id: 1,
      nickname: 'nickname',
      imageUri: '',
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },

  {
    id: 4,
    userId: 1,
    title: 'title',
    description:
      '더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.',
    createdAt: 'createdAt',
    author: {
      id: 1,
      nickname: 'nickname',
      imageUri: '',
    },
    imageUris: [],
    likes: [{ userId: 1 }],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
];

export const FeedList = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={Styles.contentContainer}
    />
  );
};

const Styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY['200'],
    gap: 12,
  },
});
