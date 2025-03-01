import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { CustomButton } from '@/components/CustomButton';
import { Link } from 'expo-router';

const AuthScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image source={require('@/assets/images/logo.png')} style={Styles.logo} />
      </View>
      <View style={Styles.buttonContainer}>
        <CustomButton label='이메일 로그인' />
        <Link href='/' style={Styles.signupText}>
          이메일로 가입하기
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },

  buttonContainer: {
    paddingHorizontal: 32,
    flex: 1,
  },

  logo: {
    width: 112,
    height: 112,
  },

  signupText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
