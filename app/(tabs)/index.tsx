import { Pressable, SafeAreaView, Text } from 'react-native';
import { CustomButton } from '@/components/CustomButton';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable>
        <Text>홈스크린</Text>
        <CustomButton label={'버튼'} onPress={() => router.push('/auth')} />
      </Pressable>
    </SafeAreaView>
  );
}
