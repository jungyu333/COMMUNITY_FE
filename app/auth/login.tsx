import { StyleSheet, View } from 'react-native';
import { FixedBottomCTA } from '@/components/FixedBottomCTA';
import { FormProvider, useForm } from 'react-hook-form';
import { EmailInput } from '@/components/EmailInput';
import { PasswordInput } from '@/components/PasswordInput';

type FormValues = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...signupForm}>
      <View style={Styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>

      <FixedBottomCTA label={'로그인하기'} onPress={signupForm.handleSubmit(onSubmit)} />
    </FormProvider>
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
