import { Controller, useFormContext } from 'react-hook-form';
import { InputField } from '@/components/InputField';

export const EmailInput = () => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <InputField
          label={'이메일 로그인'}
          placeholder={'이메일을 입력해주세요.'}
          value={value}
          onChangeText={onChange}
        />
      )}
      name={'email'}
      control={control}
    />
  );
};
