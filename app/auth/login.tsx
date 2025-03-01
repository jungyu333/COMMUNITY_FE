import { StyleSheet, View } from 'react-native';
import { InputField } from '@/components/InputField';
import { CustomButton } from '@/components/CustomButton';
import { colors } from '@/constants/color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const inset = useSafeAreaInsets();

  return (
    <>
      <View style={Styles.container}>
        <InputField label={'이메일 로그인'} placeholder={'이메일을 입력해주세요.'} />
        <InputField label={'비밀번호'} placeholder={'비밀번호를 입력해주세요.'} />
      </View>

      <View style={[Styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
        <CustomButton label={'로그인하기'} />
      </View>
    </>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },

  fixed: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY['300'],
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
