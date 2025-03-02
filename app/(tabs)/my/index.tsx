import { Pressable, SafeAreaView, Text } from 'react-native';
import { router, useFocusEffect } from 'expo-router';

export default function MyScreen() {
  useFocusEffect(() => {
    router.replace('/auth');
  });

  return (
    <SafeAreaView>
      <Pressable>
        <Text>내 정보 스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}
