import { Stack } from 'expo-router';

export default function MyLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: '내 프로필', headerShown: false }} />
    </Stack>
  );
}
