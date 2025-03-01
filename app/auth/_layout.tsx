import { Link, Stack } from 'expo-router';
import { Foundation } from '@expo/vector-icons';
import { colors } from '@/constants/color';
import { StyleSheet } from 'react-native';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}>
      <Stack.Screen
        name='index'
        options={{
          title: '로그인',
          headerShown: true,
          headerLeft: () => (
            <Link href={'/'} replace style={Styles.homeIcon}>
              <Foundation name={'home'} size={28} color={colors.BLACK} />{' '}
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default AuthLayout;

const Styles = StyleSheet.create({
  homeIcon: {
    paddingRight: 5,
  },
});
