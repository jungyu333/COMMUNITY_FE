import { SafeAreaView } from 'react-native';
import { FeedItem } from '@/components/FeedItem';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FeedItem
        post={{
          id: 1,
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
        }}
      />
    </SafeAreaView>
  );
}
