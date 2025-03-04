import { Controller, useFormContext } from 'react-hook-form';
import { InputField } from '@/components/InputField';

export const PasswordConfirmInput = () => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <InputField
          label={'비밀번호 확인'}
          placeholder={'비밀번호를 입력해주세요.'}
          value={value}
          onChangeText={onChange}
        />
      )}
      name={'passwordConfirm'}
      control={control}
    />
  );
};
