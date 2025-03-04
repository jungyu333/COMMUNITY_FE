import { StyleSheet, View } from 'react-native';
import { FixedBottomCTA } from '@/components/FixedBottomCTA';
import { FormProvider, useForm } from 'react-hook-form';
import { EmailInput } from '@/components/EmailInput';
import { PasswordConfirmInput } from '@/components/PasswordConfirmInput';
import { PasswordInput } from '@/components/PasswordInput';

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const SignupScreen = () => {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...signupForm}>
      <View style={Styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior={'submit'} />
        <PasswordConfirmInput />
      </View>

      <FixedBottomCTA label={'회원가입하기'} onPress={signupForm.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default SignupScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
