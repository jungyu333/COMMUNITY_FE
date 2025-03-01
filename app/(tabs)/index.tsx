import { Pressable, SafeAreaView, Text } from 'react-native';
import { CustomButton } from '@/components/CustomButton';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable>
        <Text>홈스크린</Text>
        <CustomButton label={'버튼'} onPress={() => console.log('click')} />
      </Pressable>
    </SafeAreaView>
  );
}
