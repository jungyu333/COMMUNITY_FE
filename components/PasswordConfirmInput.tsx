import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { InputField } from '@/components/InputField';

export const PasswordConfirmInput = () => {
  const { control } = useFormContext();
  const password = useWatch({ control, name: 'password' });

  return (
    <Controller
      rules={{
        validate: (data: string) => {
          if (data !== password) {
            return '비밀번호가 일치하지 않습니다.';
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label={'비밀번호 확인'}
          placeholder={'비밀번호를 입력해주세요.'}
          value={value}
          secureTextEntry
          onChangeText={onChange}
          error={error?.message}
        />
      )}
      name={'passwordConfirm'}
      control={control}
    />
  );
};
