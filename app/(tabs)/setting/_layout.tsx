import { Stack } from 'expo-router';
import { colors } from '@/constants/color';

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}>
      <Stack.Screen name='index' options={{ title: '설정', headerShown: false }} />
    </Stack>
  );
}
