import { Stack } from 'expo-router';
import { Foundation } from '@expo/vector-icons';
import { colors } from '@/constants/color';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: '로그인',
          headerShown: true,
          headerLeft: () => <Foundation name={'home'} size={28} color={colors.BLACK} />,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
