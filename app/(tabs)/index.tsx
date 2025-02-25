import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.push('/explore')}>
        <Text>홈스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}
