import { StyleSheet, View } from 'react-native';
import { InputField } from '@/components/InputField';

const LoginScreen = () => {
  return (
    <View style={Styles.container}>
      <InputField label={'이메일 로그인'} />
    </View>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});
