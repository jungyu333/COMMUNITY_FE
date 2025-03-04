import { Controller, useFormContext } from 'react-hook-form';
import { InputField } from '@/components/InputField';

export const PasswordInput = () => {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      rules={{
        validate: (data: string) => {
          if (data.length < 8) {
            return '비밀번호는 8자 이상 입력해주세요.';
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label={'비밀번호'}
          placeholder={'비밀번호를 입력해주세요.'}
          secureTextEntry
          submitBehavior={'submit'}
          textContentType={'oneTimeCode'}
          value={value}
          onChangeText={onChange}
          error={error?.message}
          onSubmitEditing={() => setFocus('passwordConfirm')}
        />
      )}
      name={'password'}
      control={control}
    />
  );
};
