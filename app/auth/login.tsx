import { StyleSheet, View } from 'react-native';
import { InputField } from '@/components/InputField';

const LoginScreen = () => {
  return (
    <View style={Styles.container}>
      <InputField label={'이메일 로그인'} placeholder={'이메일을 입력해주세요.'} />
      <InputField label={'비밀번호'} placeholder={'비밀번호를 입력해주세요.'} />
    </View>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
